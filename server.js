import express from "express"
import { connectToDB } from "./database.js"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()



const app = express()
app.use(express.json())
app.use(cors())


await connectToDB()

app.listen(3030, () => {
    console.log("Server running on port 3030")
})

