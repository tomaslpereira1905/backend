import { MongoClient } from "mongodb";
const connectionString = "mongodb+srv://jafonso:jafonsodb2024@clusterproject.rncoz.mongodb.net/";
const client = new MongoClient(connectionString);
let conn;
try {
conn = await client.connect();
} catch(e) {
console.error(e);
}
// Database name
let db = conn.db("ProjetoADAD");
export default db;

//ola