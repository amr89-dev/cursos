const http = require("http"),
  options = {
    host: "jonmircha.com",
    port: 3000,
    path: "/",
  };

http
  .get(options, (res) => {
    console.log(
      "El sitio " + options.host + " ha respondido " + res.statusCode
    );
  })
  .on("error", (err) => {
    console.log(err.code, err.statusCode);
  });
