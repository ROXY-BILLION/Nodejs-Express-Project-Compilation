const express = require("express");

const app = express();
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
app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((task) => {
        return task.id === id;
    })
    tasks.splice(index, 1);
    
    res.json({
        message: "Task deleted Successfully"
    })
});
app.get("/tasks", (req, res) => {
    res.json(tasks);
})
app.listen(3000, () => {
    console.log("Server is running in port 3000")
})