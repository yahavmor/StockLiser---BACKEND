import { MongoClient } from "mongodb"

let client
let db

export async function connectToDB() {
  const url = process.env.MONGO_URI
  if (!url) {
    throw new Error("MONGO_URI is not set in environment variables")
  }

  client = new MongoClient(url)
  await client.connect()
  db = client.db("stockliser")
  console.log("Connected to MongoDB Atlas")
}

export function getDB() {
    return db
}
