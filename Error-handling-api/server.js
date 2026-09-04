const express = require("express");
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "API is working"
  });
});

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong");

  next(error);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});