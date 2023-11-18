const http = require("http"),
  util = require("util"),
  formidable = require("formidable"),
  fse = require("fs-extra");

const port = 3000;
const hostname = "127.0.0.1";

const uploaderServer = http.createServer((req, res) => {
  if (req.method === "GET") {
    const form = `
      <h1>Formulario</h1>
      <form action="/files" enctype="multipart/form-data" method="POST">
      <div><input type="file" name="upload" required></div>
      <div><input type="submit" value="Subir Archivo"></div>
      </form>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form);
  }
  if (req.method === "POST" && req.url === "/files") {
    const form = new formidable.IncomingForm();

    form
      .parse(req, (err, fields, files) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          "<h1>Archivos Recibido</h1>" + util.inspect({ files: files })
        );
        res.end();
      })
      .on("progress", (bytesReceived, bytesExpected) => {
        let percentCompleted = (bytesReceived / bytesExpected) * 100;
        console.log(percentCompleted);
      })
      .on("error", (err) => {
        console.log(err);
      })
      .on("end", function (fields, files) {
        //Ubicacion temporal
        let tempPath = this.openedFiles[0],
          //nombre del archivo
          fileName = this.openedFiles[0].name,
          //nueva ubicación
          newLocation = "./files/" + fileName;
        console.log("ruta " + tempPath);
        fse.copy(tempPath, newLocation, (err) => {
          return err
            ? console.log(err)
            : console.log("El Archivo se subió exitosamente");
        });
      });

    return;
  }
});

uploaderServer.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
