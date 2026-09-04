const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
        id: 1,
        title: "learn express"
        }
    ])
})
module.exports = router;