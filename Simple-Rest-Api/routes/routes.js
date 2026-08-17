const express = require("express");

const router = express.Router();

let users = [
    {
        id: 1,
        name: "Divine",
        email: "divine@example.com"
    },
    {
        id: 2,
        name: "John",
        email: "john@example.com"
    }
];

// GET /users
router.get("/", (req, res) => {
    res.json(users);
});

// GET /users/:id
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

// POST /users
router.post("/", (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// PUT /users/:id
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
});

// DELETE /users/:id
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const userExists = users.some(user => user.id === id);

    if (!userExists) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users = users.filter(user => user.id !== id);

    res.json({
        message: "User deleted successfully"
    });
});

module.exports = router;