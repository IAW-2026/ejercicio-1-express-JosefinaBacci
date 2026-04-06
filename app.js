const express = require('express');
const app = express();
let mensajes = [];

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido a la aplicación de mensajes</h1>
    <form action="/mensajes" method="POST">
      <input type="text" name="mensaje" placeholder="Escribe tu mensaje" required>
      <button type="submit">Enviar</button>
    </form>
    <a href="/mensajes">Ver mensajes</a>
  `);
});

app.post('/mensajes', (req, res) => {
  const { mensaje } = req.body;
  mensajes.push(mensaje);
  res.redirect('/mensajes');
});

app.get('/mensajes', (req, res) => {
  let lista = mensajes.map(m => `<li>${m}</li>`).join('');

  res.send(`
    <h1>Mensajes</h1>
    <ul>${lista}</ul>
    <a href="/">Volver</a>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
}); 