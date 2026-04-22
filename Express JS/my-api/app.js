const express = require("express");
const router = require("./src/routes/api");
const app = express();

// Security middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const hpp = require('hpp')
const cors = require('cors')

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(hpp())

// Rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter)

// Routes
app.use("/api/v1", router);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Route not found"
    });
});

module.exports = app;