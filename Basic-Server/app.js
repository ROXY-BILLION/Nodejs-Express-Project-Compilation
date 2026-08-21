const express = require("express");

const app = express();
app.set("view engine","ejs")

// app.get("/index", (req, res) => {
//     res.render("index")
// })
app.get("/", (req, res) => {
    res.render("Divine")
})
app.listen(3000, () => {
    console.log("server is listening at port 3000")
})