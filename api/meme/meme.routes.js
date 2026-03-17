import express from "express"
import { saveMeme , getMemes,removeMeme} from "./meme.controller.js"

export const memeRoutes = express.Router()

memeRoutes.post("/save", saveMeme)
memeRoutes.get("/",getMemes)
memeRoutes.delete("/:id",removeMeme)




