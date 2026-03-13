import { getDB } from "../database.js"
import { ObjectId } from "mongodb"

export const userService = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    addUser
}

async function getUser(id) {
    const db = getDB()
    const collection = db.collection("users")

    return await collection.findOne({ _id: new ObjectId(id) })
}

async function getUsers() {
    const db = getDB()
    const collection = db.collection("users")

    return await collection.find().toArray()
}

async function deleteUser(id) {
    const db = getDB()
    const collection = db.collection("users")

    return await collection.deleteOne({ _id: new ObjectId(id) })
}

async function updateUser(id, updates) {
    const db = getDB()
    const collection = db.collection("users")

    return await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updates }
    )
}

async function addUser(newUser) {
    const db = getDB()
    const collection = db.collection("users")

    const result = await collection.insertOne(newUser)
    return { _id: result.insertedId, ...newUser }
}
