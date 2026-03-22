import express from "express"
import { login, signup, logout, getLoggedInUser} from "./auth.controller.js"
import { requireAuth } from "../../middlewares/requareAuth.js"


export const authRoutes = express.Router()

authRoutes.post("/login", login)
authRoutes.post("/logout",requireAuth,logout)
authRoutes.post("/signup",signup)
authRoutes.get('/me',requireAuth,getLoggedInUser)



