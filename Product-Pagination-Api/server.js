const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());

const client = new MongoClient("mongodb://127.0.0.1:27017");

let products;

async function connectDB() {
  await client.connect();

  const db = client.db("BackendCourseDB");

  products = db.collection("products");

  console.log("MongoDB connected");
}

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Product Filter API is working"
  });
});

app.get("/products/page", async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;

    const skip = (page - 1) * limit;

    const productsList = await products.find().skip(skip).limit(limit).toArray();

    res.json(productsList);
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});