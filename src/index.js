const express = require('express');
const venon = require('venom-bot');

const app = express();

app.use(express.json());

async function main() {
  const client = venon.create({
    session: "test-session",
    headless: false,
    useChrome: false
  });
};

main();
app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
