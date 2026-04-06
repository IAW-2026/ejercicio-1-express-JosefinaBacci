const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/acerca', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'acerca.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacto.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});