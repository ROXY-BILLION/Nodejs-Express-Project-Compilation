const express = require("express");

const app = express();

const tasks = [
    {
        id: 1,
        name: "Learn Express"
    },
    {
        id: 2,
        name: "Learn Nodejs"
    },
]

app.get("/", (req, res) => {
    res.json(tasks);
})
app.listen(3000, () => {
    console.log("server is running on port 3000")
})