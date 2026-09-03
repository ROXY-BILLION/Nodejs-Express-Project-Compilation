const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("MiddleWare 1")
    next();
});

app.use((req, res, next) => {
    console.log("MiddleWare 2")
    next();
});

app.get("/", (req, res) => {
    res.send("Request Completed");
});

app.listen(3000, () => {
    console.log("server is running in port 3000")
})