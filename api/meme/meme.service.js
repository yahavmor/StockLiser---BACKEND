import { getDB } from "../../database.js"
import { ObjectId } from "mongodb"

export const memeService = {
    getMemes,
    getMeme,
    saveMeme,
    removeMeme
}

async function getMemes(userId) {
    const db = getDB()
    const collection = db.collection("users")

    const user = await collection.findOne({ _id: new ObjectId(userId) })
    return user.savedMemes || []
}
async function getMeme(userId, memeId) {
    const db = getDB()
    const collection = db.collection("users")

    const user = await collection.findOne({ _id: new ObjectId(userId) })
    if (!user) return null

    const meme = user.savedMemes.find(m => m.id === memeId)
    return meme
}


async function saveMeme(userId, meme) {
    const db = getDB()
    const collection = db.collection("users")

    await collection.updateOne(
        { _id: new ObjectId(userId) },
        { $push: { savedMemes: meme } }
    )
    return meme
}
async function removeMeme(userId, memeId) {
    const db = getDB()
    const collection = db.collection("users")

    await collection.updateOne(
        { _id: new ObjectId(userId) },
        { $pull: { savedMemes: { id: memeId } } }
    )
    return { msg: "Meme removed", id: memeId }
}

