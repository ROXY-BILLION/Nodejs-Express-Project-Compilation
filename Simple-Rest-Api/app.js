const express = require("express");
const userRoutes = require("./routes/routes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Simple REST API is running"
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        message: "Something went wrong"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});