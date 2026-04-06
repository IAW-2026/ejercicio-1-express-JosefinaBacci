const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/api/contacto', (req, res) => {
  const { nombre, mensaje } = req.body;

  res.json({
    respuesta: `Gracias ${nombre}, recibimos tu mensaje: "${mensaje}"`
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});