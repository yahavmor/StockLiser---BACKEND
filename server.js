import express from "express"
import { connectToDB } from "./database.js"
import cors from "cors"
import dotenv from "dotenv"
import { authRoutes } from './api/auth/auth.routes.js'
import session from "express-session"
import MongoStore from "connect-mongo"
import { memeRoutes } from "./api/meme/meme.routes.js"
import { stockRoutes } from "./api/stock/stock.routes.js"
import path from "path"
import { fileURLToPath } from "url"

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://backend-stock-sv6k.onrender.com'
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
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  domain: "backend-stock-sv6k.onrender.com"
  }
}))

app.use('/api/auth', authRoutes)
app.use('/api/meme', memeRoutes)
app.use('/api/stock', stockRoutes)




app.use(express.static(path.resolve(__dirname, "dist")))

app.get("(.*)", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"))
})


await connectToDB()

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})





