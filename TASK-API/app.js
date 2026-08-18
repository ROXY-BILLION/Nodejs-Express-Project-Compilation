const express = require("express");

const app = express();
app.use(express.json());

const tasks = [
    {
        id: 1,
        name: "Learn Express"
    },
    {
        id: 2,
        name: "Practice APIs"
    },
    {
        id: 3,
        name: "Build REST APIs"
    }
];


app.get("/", (req, res) => {
    res.send("Task API is running");
});


app.get("/tasks", (req, res) => {
    res.json(tasks);
});


app.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const result = tasks.find((task) => {
        return task.id === id;
    })
    if (!result) {
        return (res.status(404).json({
            message:"Task not found"
        }))
    }
    res.json(result);
})


app.post("/tasks", (req, res) => {
    tasks.push(req.body)
    res.status(201).json(req.body)
})


app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const newData = req.body;
    const task = tasks.find((task) => {
        return task.id === id;
    })
    task.name = newData.name;
    res.json(task);
});


app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = tasks.findIndex((task) => {
        return task.id === id;
    })
    tasks.splice(index, 1)
    res.json({
        message:"Task successfully deleted"
    })
});


app.get("/tasks", (req, res) => {
    res.json(tasks)
})


app.listen(3000, () => {
    console.log("server is running on port 3000")
})