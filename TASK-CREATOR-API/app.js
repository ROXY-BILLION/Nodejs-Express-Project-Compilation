const express = require("express");

const app = express();
app.use(express.json())
const tasks = [
    {
        id: 1,
        name: "Learn Express"
    },
    {
        id: 2,
        name: "Learn MongoDb"
    },  
]

app.post("/tasks", (req, res) => {
    tasks.push(req.body)
    res.status(201).json(req.body)
})
app.get("/tasks", (req, res) => {
    res.json(tasks)
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})