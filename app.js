const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const lugaresRoute = require("./routes/lugares");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/lugares", lugaresRoute);

// la conexion a mongoDb Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MOngoDB Atlas"))
    .catch(err => console.error("Error de conexión:", err));

const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});