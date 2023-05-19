const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: 'hell world'});
});


app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
