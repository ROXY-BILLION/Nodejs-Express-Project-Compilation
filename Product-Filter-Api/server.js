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

app.post("/products", async (req, res) => {
  const result = await products.insertOne(req.body);

  res.status(201).json({
    message: "Product created",
    id: result.insertedId
  });
});

app.get("/products", async (req, res) => {
  const category = req.query.category;

  let productsList;

  if (category) {
    productsList = await products.find({
      category: category
    }).toArray();
  } else {
    productsList = await products.find().toArray();
  }

  res.json(productsList);
});

app.get("/products/search", async (req, res) => {
  const search = req.query.search;

  if (!search) {
    return res.status(400).json({
      message: "Search term is required"
    });
  }

  const productsList = await products.find({
    name: {
      $regex: search,
      $options: "i"
    }
  }).toArray();

    if (productsList.length === 0) {
    return res.status(404).json({
      message: "No products found"
    });
  }

  res.json(productsList);
})

app.get("/products/sort", async (req, res) => {
  const sort = req.query.sort;
  let productsList;
  if (sort === "price") {
    productsList = await products.find().sort({
      price: -1
    }).toArray();
  } else {
    productsList = await products.find().toArray()
  }
  res.json(productsList);
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});