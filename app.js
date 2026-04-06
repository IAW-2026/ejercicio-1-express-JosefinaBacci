const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.post('/contacto', (req, res) => {
  const { nombre, mensaje } = req.body;

  res.send(`
    <h1>Mensaje recibido</h1>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Mensaje:</strong> ${mensaje}</p>
    <a href="/index.html">Volver</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});