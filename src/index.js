// index.mjs

import express from "express";

// Crea una instancia de Express
const app = express();

// Define una ruta básica
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Define el puerto
const PORT = 4000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
