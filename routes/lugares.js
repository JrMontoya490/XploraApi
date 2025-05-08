const express = require("express");
const router = express.Router();
const Lugar = require("../models/Lugar");

// Obtener todos los lugares
router.get("/", async (req, res) => {
    try {
        const lugares = await Lugar.find();
        res.json(lugares);
    } catch (error) {
        console.error("❌ Error real al obtener lugares:", error.message);
        res.status(500).json({ error: "Error al obtener los lugares" });
    }
});

// Crear un nuevo lugar
router.post("/", async (req, res) => {
    try {
        const nuevoLugar = new Lugar(req.body);
        const guardado = await nuevoLugar.save();
        res.status(201).json(guardado);
    } catch (error) {
        console.error("❌ Error al crear lugar:", error.message);
        res.status(400).json({ error: "Error al crear el lugar" });
    }
});

module.exports = router;
