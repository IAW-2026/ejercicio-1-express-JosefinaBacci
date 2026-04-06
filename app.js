const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const frases = [
  "¡Ay caramba!",
  "Marge, ¿dónde está esa cosa... esa cosa que... ya sabes, la que sirve para...?",
  "¿Cuándo voy a aprender? La solución a todos los problemas de la vida no está en el fondo de una botella. ¡Está en la televisión!",
  "¡Perfectirijillo!",
  "¡D'oh!",
  "¡Excelente!"
];

app.get('/frase', (req, res) => {
  const indice = Math.floor(Math.random() * frases.length);
  const fraseAleatoria = frases[indice];

  res.json({ frase: fraseAleatoria });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
}); 