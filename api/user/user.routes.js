import express from "express"
import { getUsers, getUser, deleteUser, updateUser, addUser } from "./user.controller.js"

export const userRoutes = express.Router()

userRoutes.get("/user", getUsers)
userRoutes.get("/user/:id", getUser)
userRoutes.delete("/user/:id",deleteUser)
userRoutes.put("/user/:id",updateUser)
userRoutes.post("/user",addUser)


