const express = require("express"),
  app = express();
(cookieParser = require("cookie-parser")),
  (cookieSession = require("cookie-session"));

app
  .use(cookieParser())
  .use(cookieSession({ secret: "secreto" }))
  .get("/", (req, res) => {
    req.session.visitas || (req.session.visitas = 0);
    let n = req.session.visitas++;
    res.end(`
  <h1>Contador de visitas con Express </h1>
  <h3>me has visitado ${n} veces</h3>
  `);
  })
  .listen(3000);

console.log("Ejecutando en el puerto 3000");
