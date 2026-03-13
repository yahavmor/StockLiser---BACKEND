import { MongoClient } from "mongodb"

const url ='mongodb+srv://yahavmor77_db_user:naan1930@yahavmor.8urmsdo.mongodb.net/?appName=yahavMor'

const client = new MongoClient(url)

let db

export async function connectToDB() {
    await client.connect()
    db = client.db("stockDB")
    console.log("Connected to MongoDB Atlas")
}

export function getDB() {
    return db
}
