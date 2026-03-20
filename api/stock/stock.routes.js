import express from "express"
import { saveStock , getStocks,removeStock} from "./stock.controller.js"

export const stockRoutes = express.Router()

stockRoutes.post("/save", saveStock)
stockRoutes.get("/",getStocks)
stockRoutes.delete("/:id",removeStock)




