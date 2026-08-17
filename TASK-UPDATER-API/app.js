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
    }
];

app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const newData = req.body;

    const task = tasks.find((task) => {
        return task.id === id;
    })
    task.name = newData.name;
    res.join(task);
});
app.get("/tasks", (req, res) => {
    res.json(tasks);
})
app.listen(3000, () => {
    console.log("Server is currently running on port 3000")
})