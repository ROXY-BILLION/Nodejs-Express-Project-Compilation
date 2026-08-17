const express = require("express");

const app = express();

const tasks = [
    {
        id: 1,
        name: "Learn Monodb"
    },
    {
        id: 2,
        name: "Learn Express"
    },
]


app.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const result = tasks.find((task) => {
        return task.id === id;
    });
    if (!result) {
        return (
            res.status(404).json({
                message: "Task not found"
            })
        )
    }

    res.json(result);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})