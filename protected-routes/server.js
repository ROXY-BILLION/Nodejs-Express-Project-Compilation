const express = require("express");
const app = express();

function checkAccess(req, res, next) {
    const allowed = false;

    if (!allowed) {
        return res.status(401).json({
            message:"Access Denied"
        })
    }
    next();
}

app.get("/dashboard", checkAccess,(req, res)=> {
    res.json({
        message: "Welcome to dashboard"
    });
})

app.get("/about", (req, res)=> {
    res.json({
        message: "Welcome to about page"
    });
})

app.listen(3000, () => {
    console.log("server is running at port 3000")
})