const http = require("http"),
  form = require("fs").readFileSync("assets/form.html"),
  querystring = require("querystring"),
  util = require("util");
let dataString = "";

const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(form);
  }

  if (req.method === "POST") {
    req
      .on("data", function (data) {
        dataString += data;
      })
      .on("end", function () {
        let dataObject = querystring.parse(dataString);
        let dataJSON = util.inspect(dataObject);
        let templateString = `Los datos son los siguientes ${dataString}
        
        El objeto ${dataJSON}`;

        console.log(templateString);
        res.end(templateString);
      });
  }
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
