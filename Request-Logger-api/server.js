const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next();
})

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Learn Express"
        }
    ])
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})