const express = require("express"),
  app = express();

app
  .get("/", (req, res) => {
    res.send("<h1>Hola mundo desde Express con res.send</h1>");
  })
  .get("/google", (req, res) => {
    res.redirect(301, "http://www.google.com");
  })
  .get("/json", (req, res) => {
    res.json({
      name: "amado",
      age: 22,
      twitter: "@sorrus",
    });
  })
  .listen(3000);

console.log("Ejecuntando en el puerto 3000");
