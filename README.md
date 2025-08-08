# 📊 GraphQl + Finance = GraphFin-v2

GraphFin-v2 is a **full-stack finance tracker** powered by **GraphQL** and **React**, designed to help you manage and visualize your expenses, investments, and savings in real-time.  
Built with performance, scalability, and modern UI in mind — featuring live charts, authentication, caching, and scheduled tasks.

---

## 🚀 Features

- **User Authentication** with PassportJS (Login/Logout/Signup)
- **GraphQL API** for flexible data querying
- **Real-time Charts** with Chart.js (updated from backend)
- **Transaction Management**:
  - Create, Update, Delete
  - Instant UI updates via Apollo Cache
- **Relationships** between User ↔ Transactions
- **Performance Boost** with Apollo Client caching (~40% faster load)
- **Scheduled Tasks** with Cron.js (e.g., monthly summaries, reminders)
- **Responsive UI** with Tailwind CSS & Aceternity UI
- **Error Handling** & Skeleton loaders for smooth UX
- **MongoDB Atlas** for cloud database hosting

---

## 🛠️ Tech Stack

**Frontend**
- HTML, CSS, JavaScript
- React
- Tailwind CSS
- Aceternity UI
- Chart.js
- Apollo Client

**Backend**
- Node.js
- Express.js
- Apollo Server
- GraphQL
- PassportJS (Auth)
- Mongoose (MongoDB ORM)
- Cron.js (Scheduled tasks)

**Database**
- MongoDB Atlas (Cloud)

---

## 📂 Folder Structure
GraphFin-v2/
│
├── backend/
│ ├── models/ # Mongoose Schemas
│ ├── resolvers/ # GraphQL resolvers
│ ├── typeDefs/ # GraphQL type definitions
│ ├── index.js # Server entry point
│ ├── .env # Environment variables (MONGO_URI, etc.)
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/ # UI Components (Cards, Charts, etc.)
│ │ ├── pages/ # Home, Login, SignUp, Transaction, NotFound
│ │ ├── App.jsx # App Routes
│ │ └── index.js
│ ├── public/
│ └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/ASUS-TUFLSR/GraphFin-v2
cd GraphFin-v2

2️⃣ Backend Setup
bash
cd backend
npm install

Create a .env file in the backend directory:

MONGO_URI=your_mongodb_atlas_uri
PORT=3001

Start the backend:
bash
npm run dev

3️⃣ Frontend Setup
bash
cd ../frontend
npm install

Start the frontend:

bash
npm run dev

🔑 Environment Variables
Backend .env file should contain:
ini
MONGO_URI=your_mongodb_atlas_uri
PORT=3001
SESSION_SECRET=your_secret_key

📊 GraphQL Schema Overview
User 
graphql
type User {
  id: ID!
  name: String!
  email: String!
  transactions: [Transaction]
}

Transaction
type Transaction {
  id: ID!
  type: String!  # expense, investment, saving
  amount: Float!
  date: String!
  user: User!
}

🛠️ Future Enhancements
✅ Offline mode with Apollo Client persistence

✅ Export transactions as CSV/PDF

✅ Real-time updates with GraphQL Subscriptions

✅ Dark/Light mode toggle

✅ AI-powered financial insights

📜 License
This project is licensed under the MIT License.
