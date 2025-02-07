import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://fullstackjornada:qojI71xVU2aV8UKC@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
await client.connect();

let database;

export const connectToServer = () => (database = client.db("spotify"));

export const getDb = () => database;

export const closeClient = () => client.close();
