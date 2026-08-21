const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const uri = "mongodb+srv://giftdivine787_db_user:BillionJnr11208107074843@cluster0.mnpqmyv.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

app.get("/", (req, res) => {
    res.send("Ecommerce Api is running")
})

client.connect()
    .then(() => {
        console.log("Connected to MongoDB!");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });