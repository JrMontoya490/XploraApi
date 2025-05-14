const mongoose = require("mongoose");
const Lugar = require("../models/Lugar");

// Obtener todos los lugares
const obtenerLugares = async (req, res) => {
    try {
        const lugares = await Lugar.find();
        res.json(lugares);
    } catch (error) {
        console.error("❌ Error al obtener lugares:", error.message);
        res.status(500).json({ error: "Error al obtener los lugares" });
    }
};

// Crear un nuevo lugar
const crearLugar = async (req, res) => {
    try {
        const nuevoLugar = new Lugar(req.body);
        const guardado = await nuevoLugar.save();
        res.status(201).json(guardado);
    } catch (error) {
        console.error("❌ Error al crear lugar:", error.message);
        res.status(400).json({ error: "Error al crear el lugar" });
    }
};

// ✅ Obtener un lugar por ID (con validación de formato)
const obtenerLugarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar si es un ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const lugar = await Lugar.findById(id);
        if (!lugar) {
            return res.status(404).json({ error: "Lugar no encontrado" });
        }

        res.json(lugar);
    } catch (error) {
        console.error("❌ Error al obtener lugar:", error.message);
        res.status(500).json({ error: "Error al obtener el lugar" });
    }
};

// Actualizar un lugar
const actualizarLugar = async (req, res) => {
    try {
        const lugarActualizado = await Lugar.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lugarActualizado) {
            return res.status(404).json({ error: "Lugar no encontrado" });
        }
        res.json(lugarActualizado);
    } catch (error) {
        console.error("❌ Error al actualizar lugar:", error.message);
        res.status(400).json({ error: "Error al actualizar el lugar" });
    }
};

// Eliminar un lugar
const eliminarLugar = async (req, res) => {
    try {
        const lugarEliminado = await Lugar.findByIdAndDelete(req.params.id);
        if (!lugarEliminado) {
            return res.status(404).json({ error: "Lugar no encontrado" });
        }
        res.json({ mensaje: "Lugar eliminado correctamente" });
    } catch (error) {
        console.error("❌ Error al eliminar lugar:", error.message);
        res.status(500).json({ error: "Error al eliminar el lugar" });
    }
};

module.exports = {
    obtenerLugares,
    crearLugar,
    obtenerLugarPorId,
    actualizarLugar,
    eliminarLugar
};
