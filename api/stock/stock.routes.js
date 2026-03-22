import express from "express"
import { saveStock , getStocks,removeStock} from "./stock.controller.js"
import { requireAuth } from "../../middlewares/requareAuth.js"

export const stockRoutes = express.Router()

stockRoutes.post("/save",requireAuth, saveStock)
stockRoutes.get("/",requireAuth,getStocks)
stockRoutes.delete("/:id",requireAuth,removeStock)




