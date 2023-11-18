const express = require("express");
const routerApi = require("./routes");
const useGraphQl = require("./graphql");
const cors = require("cors");
const {
  errorLog,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/error.handler");

const createServer = async () => {
  const server = express();
  server.use(express.json());
  const ACCEPTED_ORIGINS = [
    "http://localhost:3001",
    "http://localhost:5173",
    "http://localhost:5174",
  ];

  const options = {
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
  };
  server.use(cors(options));
  require("./utils/auth/index");
  routerApi(server);
  await useGraphQl(server);

  server.use(errorLog);
  server.use(ormErrorHandler);
  server.use(boomErrorHandler);
  server.use(errorHandler);

  return server;
};

module.exports = createServer;
