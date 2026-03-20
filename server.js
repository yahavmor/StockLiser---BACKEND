import express from "express"
import { connectToDB } from "./database.js"
import cors from "cors"
import dotenv from "dotenv"
import { authRoutes } from './api/auth/auth.routes.js'
import session from "express-session"
import MongoStore from "connect-mongo"
import { memeRoutes } from "./api/meme/meme.routes.js"
import { stockRoutes } from "./api/stock/stock.routes.js"


dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ],
  credentials: true
}))

app.use(session({
  name: "connect.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI, 
    ttl: 60 * 60 * 24
  }),
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  }
}))

app.use('/api/auth', authRoutes)
app.use('/api/meme', memeRoutes)
app.use('/api/stock', stockRoutes)



await connectToDB()

app.listen(3030, () => {
  console.log("Server running on port 3030")
})
