const router = require("express").Router();

const userRouter = require("./user.router");
const messageRouter = require("./message.router");
const chatRouter = require("./chat.router");

const routerApi = (server) => {
  server.use("/api/v1", router);
  router.use("/users", userRouter);
  router.use("/messages", messageRouter);
  router.use("/chats", chatRouter);
};

module.exports = routerApi;
