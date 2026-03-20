import { getDB } from "../../database.js"
import { ObjectId } from "mongodb"

export const stockService = {
    getStocks,
    saveStock,
    removeStock
}

async function getStocks(userId) {
    const db = getDB()
    const collection = db.collection("users")

    const user = await collection.findOne({ _id: new ObjectId(userId) })
    return user.savedStocks || []
}

async function saveStock(userId, stock) {
    const db = getDB()
    const collection = db.collection("users")

    await collection.updateOne(
        { _id: new ObjectId(userId) },
        { $push: { savedStocks: stock } }
    )
    return stock
}
async function removeStock(userId, symbol) {
    const db = getDB()
    const collection = db.collection("users")

    await collection.updateOne(
        { _id: new ObjectId(userId) },
        { $pull: { savedStocks: { symbol: symbol } } }
    )
    return { msg: "Stock removed", symbol: symbol }
}

