const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hola Mundo desde Express</h1>");
});

app.listen(3000);

console.log("Ejecutando en el puerto 3000");
