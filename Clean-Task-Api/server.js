const express = require("express");

const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});