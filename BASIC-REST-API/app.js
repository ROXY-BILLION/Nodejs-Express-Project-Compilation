const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
app.get("/", ( req, res) => {
    res.send("Api is Running");
})

const tasks = [
    {
        "taskId": "1",
        "taskName": "Learn Express",
        "taskHandler": "Divine"
    },
    {
        "taskId": "2",
        "taskName": "Build REST API",
        "taskHandler": "Gift"
    },
    {
        "taskId": "3",
        "taskName": "Practice JavaScript",
        "taskHandler": "Christian"
    },
]
app.post("/tasks", (req, res) => {

    const newTask = {
        taskId: String(tasks.length + 1),
        taskName: req.body.taskName,
        taskHandler: req.body.taskHandler
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});
app.get("/tasks", (req, res) => {
    res.json({
        tasks
    })
})
app.get("/tasks/:id", (req, res) => {
    const result = tasks.find((task) => {
    return (
        task.taskId === req.params.id
    )
    })
    res.json(result)
});


app.use(express.json());
app.post("/tasks", (req, res) => {
    res.json(req.body)
});


