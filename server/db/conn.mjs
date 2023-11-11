import { MongoClient } from "mongodb";
const connectionString = "mongodb+srv://cs390-yummy-yields:cAsWzFAZ9Tzb@cluster0.srlqyui.mongodb.net/?retryWrites=true&w=majority";//process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("recipes");

export default db;