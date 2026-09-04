const express = require("express");
const app = express();
app.use(express.json());

function validateTask(req, res,next) {
    if (!req.body.title) {
        return res.status(400).json({
            message: "Title required"
        })
    }
    next();
}

app.post("/tasks", validateTask, (req, res) => {
    res.status(201).json({
        message: "Task created",
        title: req.body
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})