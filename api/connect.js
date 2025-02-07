import dotenv from "dotenv";
import { MongoClient } from "mongodb";

// dotenv.config({ path: "./.env" });

const uri = process.env.ATLAS_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
await client.connect();

let database;

export const connectToServer = () => (database = client.db("spotify"));

export const getDb = () => database;

export const closeClient = () => client.close();
