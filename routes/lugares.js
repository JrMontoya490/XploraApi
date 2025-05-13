const express = require("express");
const router = express.Router();
const {
    obtenerLugares,
    crearLugar,
    obtenerLugarPorId,
    actualizarLugar,
    eliminarLugar
} = require("../controllers/lugaresController");

router.get("/", obtenerLugares);
router.post("/", crearLugar);
router.get("/:id", obtenerLugarPorId);
router.put("/:id", actualizarLugar);   
router.delete("/:id", eliminarLugar);  

module.exports = router;
