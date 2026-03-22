import express from "express"
import { saveMeme , getMemes,removeMeme,getMeme} from "./meme.controller.js"
import { requireAuth } from "../../middlewares/requareAuth.js"


export const memeRoutes = express.Router()

memeRoutes.post("/save",requireAuth, saveMeme)
memeRoutes.get("/",requireAuth,getMemes)
memeRoutes.get("/:id",requireAuth,getMeme)
memeRoutes.delete("/:id",requireAuth,removeMeme)





