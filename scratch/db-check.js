const dns = require('node:dns').promises;
dns.setServers(['8.8.8.8', '8.8.4.4']);

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://assignment-10:TvuxGQTQwVfR3mbE@cluster0.5pnfm0z.mongodb.net/?appName=Cluster0";

async function run() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("fullstack-auth-db");
        
        console.log("Collections:");
        const collections = await db.listCollections().toArray();
        console.log(collections.map(c => c.name));
        
        const sessions = await db.collection("session").find().limit(3).toArray();
        console.log("\nSessions sample:");
        console.log(JSON.stringify(sessions, null, 2));
        
        const users = await db.collection("user").find().toArray();
        console.log("\nAll Users in 'user' collection:");
        console.log(JSON.stringify(users, null, 2));

        const users2 = await db.collection("users").find().limit(3).toArray();
        console.log("\nUsers sample from 'users' collection:");
        console.log(JSON.stringify(users2, null, 2));
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}
run();
