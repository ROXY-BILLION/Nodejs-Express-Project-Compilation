const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

const client = new MongoClient("mongodb+srv://giftdivine787_db_user:A8UGgJScjul2Crnt@backendcluster.hf7gn5f.mongodb.net/");

let products;

async function connectDB() {
    await client.connect();
    const db = client.db("shopDB");
    products = db.collection("products");

  console.log("MongoDB connected");
}

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "API is working"
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
    const productLists = await products.find().toArray();

    res.json(productLists);
})

app.get("/products/:id", async (req, res) => {
  const id = new ObjectId(req.params.id);

  const product = await products.findOne({
    _id: id
  });

  res.json(product);
});

app.put("/products/:id", async (req, res) => {
  const id = new ObjectId(req.params.id);
  const result = await products.updateOne(
    {
      _id: id
    },
    {
      $set: req.body
    }
  );
  res.json({
    message:"product updated"
  });
});

app.delete("/products/:id", async (req, res) => {
  const id = new ObjectId(req.params.id);
  const result = products.deleteOne({
    _id: id,
  });
  res.json({
    message: "Product deleted",
    deletedCount: result.deletedCount
  })
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});