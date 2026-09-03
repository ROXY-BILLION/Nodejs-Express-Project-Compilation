const express = require("express");
const app = express();
app.use(express.json());

const tasks = [
    {
        id: 1,
        title: "learn React",
        completed: "true"
    },
    {
        id: 2,
        title: "learn React Native",
        completed: "true"
    },
    {
        id: 3,
        title: "learn Mern",
        completed: "false"
    },
    {
        id: 4,
        title: "learn Software dev",
        completed: "false"
    },
];

app.get("/", (req, res) => {
    res.json(tasks);
})

app.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id)
    if(!task){
        return res.status(404).json({message: "Task not found"})
    }
    res.json(task);
})

app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: req.body.completed
    }
    tasks.push(newTask);
    res.status(201).json(newTask);
})

app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find(task => task.id === id)
    if (!task) {
        res.status(404).json({
            message:"Tasks not found"
        })
    }
    task.title = req.body.title;
    task.completed = req.body.completed;

    res.json(task);
})

app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(task => task.id === id)
    if (index === -1) {
        res.status(404).json({
            message: "Message not found"
        })
    }
    tasks.splice(index, 1);
    res.json({message: "Task has been Deleted Sucessfully"})
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})