const express = require("express");
const app = express();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}
app.use(logger);

app.get("/tasks", (req, res) => {
    res.json({
        message:"tasks recieved"
    })
})
app.listen(3000, () => {
    console.log("Server is running at port 3000")
})