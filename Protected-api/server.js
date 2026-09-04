const express = require("express");
const app = express();

function checkAuth(req, res, next) {
    const token = req.headers.authorization;
    if (token !== "Roxy 123") {
        res.status(401).json({
            message: "Unauthorized"
        });
    }
    next();
}
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Home page"
    })
})

app.get("/profile", checkAuth, (req, res)=> {
    res.json({
        message: "Welcome to profile"
    })
})

app.listen(3000, () => {
    console.log("server is running at port 3000")
})