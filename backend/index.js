import express from 'express';
import http from 'http';
import cors from "cors";
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import connectMongo from 'connect-mongodb-session';
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { buildContext } from "graphql-passport";
import mergedResolvers from "./resolvers/index.js" 
import mergedTypeDefs from "./typeDefs/index.js"
import { connectDB } from './db/connectDB.js';



dotenv.config(); // If don't call the .envfn() we won't be able to use env variables
 
const app = express();
const httpServer = http.createServer(app);

const MongoDBStore = connectMongo(session);

const store = new MongoDBStore({
  uri:process.env.MONGO_URI,
  collection: "sessions",

})

store.on("error", (err) => {
  console.log(err)
}) // for debugging purpose

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // this option specifies whether to save the session to the store on every request. if we say true then we'll have multiple session for the same user
    saveUninitialized: false,// this option specifies whether to save unintialized sessions
    cookie:{
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days after it session will expire requiring to login again
      httpOnly: true, // it will prevent Cross-site Scripting (XSS) attacks
    },
    store:store
  })
)

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start();

app.use(
  '/',
  cors({
    origin: "http://localhost:4000",
    credentials: true,
  }),
  express.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    // context is basically object which is shared across all resolvers
    context: async ({ req, res }) => buildContext({ req, res }),
  }),
);

// Modified server startup
await new Promise((resolve) =>
  httpServer.listen({ port: 4000 }, resolve),
);

await connectDB();
 
console.log(`🚀 Server ready at http://localhost:4000/`);
