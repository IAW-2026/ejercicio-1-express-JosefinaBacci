const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/saludo', (req, res) => {
  const { nombre } = req.body;

  res.json({
    mensaje: `Hola, ${nombre}`
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});