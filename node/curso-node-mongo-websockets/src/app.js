const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const socket = require("../socket");

app.use(express.json());

const ACCEPTED_ORIGINS = ["http://localhost:3001"];

const options = {
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(options));
socket.connect(server);
routerApi(app);
app.use(express.static("public"));
module.exports = { server, app };
