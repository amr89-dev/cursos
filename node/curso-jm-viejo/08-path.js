/* Contiene utulidades para manejar y trasnformar las rutas de los directorios y archivos a formato de cadena. El sistema de archivos no es consultado para comprobar si los cambios son validos */
const http = require("http");
const path = require("path");
const urls = [
  {
    route: "",
    output: "<h2>Home</h2>",
  },
  {
    route: "acerca",
    output: "<h2>Acerca</h2>",
  },
  {
    route: "contacto",
    output: "<h2>Contacto</h2>",
  },
];
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const message = "<h1>Hola Node.js</h1>";
  const pathURL = path.basename(req.url);

  urls.forEach((url) => {
    if (url.route === pathURL) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(message + url.output);
    }
  });
  console.log(pathURL);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
