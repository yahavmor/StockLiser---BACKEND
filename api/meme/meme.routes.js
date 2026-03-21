import express from "express"
import { saveMeme , getMemes,removeMeme,getMeme} from "./meme.controller.js"

export const memeRoutes = express.Router()

memeRoutes.post("/save", saveMeme)
memeRoutes.get("/",getMemes)
memeRoutes.get("/:id",getMeme)
memeRoutes.delete("/:id",removeMeme)





