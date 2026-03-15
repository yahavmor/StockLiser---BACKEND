import express from "express"
import { login, signup, logout, getLoggedInUser} from "./auth.controller.js"

export const authRoutes = express.Router()

authRoutes.post("/login", login)
authRoutes.post("/logout", logout)
authRoutes.post("/signup",signup)
authRoutes.get('/me', getLoggedInUser)



