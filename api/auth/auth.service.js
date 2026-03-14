import { getDB } from "../../database.js"
import { ObjectId } from "mongodb"


export const authService  = {
    login,
    signup
}

async function signup(newUser){
    const db = getDB()
    const collection = db.collection("users")
    const result = await collection.insertOne(newUser)
    return { _id: result.insertedId, ...newUser }
}
async function login(cred){
    const db = getDB()
    const collection = db.collection("users")
    return await collection.findOne({ _id: new ObjectId(id) })
}


