import express from "express"
import { saveMeme , getMemes,} from "./meme.controller.js"

export const memeRoutes = express.Router()

memeRoutes.post("/save", saveMeme)
memeRoutes.get("/",getMemes)




