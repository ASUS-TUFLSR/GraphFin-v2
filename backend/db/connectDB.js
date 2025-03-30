import mongoose from 'mongoose'


export const connectDB = async () => {
        try {
            const connection = await mongoose.connnect(process.env.MONGO_URI)
            console.log(`MongoDB connected ${connectDB.connection.host}`)
        } catch (err) {
            console.log(`Error connecting DB: ${err.message}`)
            process.exit(1);
        }
};

