import { getDB } from "../../database.js"
import { ObjectId } from "mongodb"
import bcrypt from "bcrypt"



export const authService  = {
    login,
    signup
}

async function signup(newUser){
    const db = getDB()
    const collection = db.collection("users")

    const existing = await collection.findOne({ username: newUser.username })
    if (existing) throw new Error("Username already exists")

    const hash = await bcrypt.hash(newUser.password, 10)

    const userToSave = {
        username: newUser.username,
        fullname: newUser.fullname,
        password: hash
    }

    const result = await collection.insertOne(userToSave)

    delete userToSave.password

    return { _id: result.insertedId, ...userToSave }
}


export async function login(cred) {
    console.log(cred)
    const db = getDB()
    const collection = db.collection("users")

    const user = await collection.findOne({ username: cred.username })
    if (!user) throw new Error("User not found")

    const match = await bcrypt.compare(cred.password, user.password)
    if (!match) throw new Error("Wrong password")

    delete user.password

    return user
}


