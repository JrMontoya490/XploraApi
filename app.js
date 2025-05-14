const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const lugaresRoute = require("./routes/lugares");

dotenv.config();
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use("/api/lugares", lugaresRoute);

// Middleware para rutas no definidas (después de todas tus rutas)
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada en el servidor" });
});

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error de conexión:", err));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
