const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "API is working"
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});