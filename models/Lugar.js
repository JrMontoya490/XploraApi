const mongoose = require("mongoose");

const lugarSchema = new mongoose.Schema({
    _id: String = "",
    nombre: String,
    pais: String,
    ciudad: String,
    descripcion: String,
    idiomas: [String],
    fecha_fundacion: Date,
    tipo_lugar: String,
    coordenadas: {
        latitud: Number,
        longitud: Number
    },
    imagen_url: String,
    etiquetas: [String]
});

module.exports = mongoose.model('Lugares', lugarSchema, 'Lugares Emblemáticos');
