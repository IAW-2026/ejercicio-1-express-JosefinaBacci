const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let contador = 0;

app.use(express.static('public'));

app.get('/', (req, res) => {
  contador++;

  res.send(`
    <h1>Bienvenido</h1>
    <p>Visitas: ${contador}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
}); 