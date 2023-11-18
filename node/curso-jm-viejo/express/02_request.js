const express = require("express"),
  app = express();

app
  .get("/", (req, res) => {
    res.end(`<h1>Hola mundo desde el archivo req</h1>`);
  })
  .get("/users/:id-:name-:age", (req, res) => {
    res.end(
      `<h1>Hola ${req.params.name}, tu id es ${req.params.id} y tienes ${req.params.age} a&ntilde;os</h1>`
    );
  })
  .get("/search", (req, res) => {
    res.end(`<h1>Hola tu busqueda es ${req.query.s}</h1>`);
  })
  .listen(3001);

console.log("Pagina activa en el puerto 3001 🚀");
