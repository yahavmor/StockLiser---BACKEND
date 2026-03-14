import express from "express"
import { connectToDB } from "./database.js"
import cors from "cors"
import dotenv from "dotenv"
import { authRoutes } from './/api/auth/auth.routes.js'


dotenv.config()

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173'
    ],
    credentials: true
  })
)
app.use('/api/auth', authRoutes)


await connectToDB()

app.listen(3030, () => {
    console.log("Server running on port 3030")
})
