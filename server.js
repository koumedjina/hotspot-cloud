const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        name: "Hotspot Cloud API",
        version: "1.0.0",
        status: "online"
    });
});

// Port
const PORT = process.env.PORT || 3000;

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Hotspot Cloud API is running on port ${PORT}`);
});
