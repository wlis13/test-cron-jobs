const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'hello world' });
});

app.listen(3001, () => console.log("Servidor executando"));
