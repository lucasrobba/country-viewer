const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta API que devuelve los países
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los países' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});