const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor express funcionando');
});

app.listen(PORT, () => {
    console.log(`Express escuchando en http://localhost:${PORT}`);
})

const queue = [];

app.use(express.json());

app.post('/upload', (req, res) => {
  const { title, content } = req.body;
  queue.push({ title, content });
  res.status(201).json({ message: 'Documento encolado' });
});

app.get('/history', (req, res) => {
    res.json(queue);
  });