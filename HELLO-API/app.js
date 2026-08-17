const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server 3000 is running")
});
app.get("/", (req, res) => {
    res.send("Hello from my Express API")
})