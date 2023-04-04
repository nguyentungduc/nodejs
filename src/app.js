const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;

// const uri = "mongodb://mongodb:27017";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

app.listen(port, () => { 
    console.log("ccccccc");
    console.log(`b ss${port}`);
});

app.get('/', (req, res) => {
  res.send("11111111111111")
})
