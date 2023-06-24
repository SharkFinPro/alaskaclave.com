import { MongoClient } from "mongodb";

const url = process.env.MONGODB_ALASKACLAVE;
const client = new MongoClient(url);

export default async function handler(req, res) {
  let body = JSON.parse(req.body);

  if (Object.keys(body).length === 0) {
    res.status(400).json("No request body found.");
    return;
  }

  const db = client.db("shop");
  const collection = db.collection("preorders");

  await client.connect();
  await collection.insertOne(body);

  res.status(200);

  // res.status(200).json({ hello: "world" });
}