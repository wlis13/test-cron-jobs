const express = require('express');
const venom = require('venom-bot')

const app = express();
app.use(express.json());

async function main() {
  try {
    const client = await venom.create({
      session: "test_cron",
      headless: true,
      useChrome: false
    });
   const verify = await client.sendText("5531998566526@c.us", "hello")
   console.log(verify);
  } catch (error) {
    console.log(error)
  }
};

main();

app.listen(3001, () => console.log("Servidor executando"));
