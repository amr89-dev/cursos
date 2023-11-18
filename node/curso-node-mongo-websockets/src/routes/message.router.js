const messageRouter = require("express").Router();
const MessageService = require("../services/message.service");
const upload = require("../middlewares/file.handler");
const service = new MessageService();

messageRouter.get("/", async (req, res) => {
  try {
    const messages = await service.getAll();
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});
messageRouter.post("/", upload.single("file"), async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;
    const message = await service.create(data, file);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});

messageRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const message = await service.getMessage(id);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});
messageRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const message = await service.updateMessage(id, data);
    res
      .status(201)
      .json({ message, message: "Mensaje actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});
messageRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const message = await service.deleteMessage(id);
    res
      .status(201)
      .json({ message, message: "Mensaje eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});
module.exports = messageRouter;
