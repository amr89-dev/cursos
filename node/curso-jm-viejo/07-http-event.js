const http = require("http");
const fs = require("fs"),
  index = fs.createReadStream("assets/index.html");

const hostname = "127.0.0.1";
const port = 3000;

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  index.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
}); */

const server = http.createServer((req, res) => {
  fs.readFile("assets/index.html", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  index.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
