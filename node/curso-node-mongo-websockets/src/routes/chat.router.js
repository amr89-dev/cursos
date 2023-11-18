const chatRouter = require("express").Router();
const ChatService = require("../services/chat.service");

const service = new ChatService();

chatRouter.get("/:idnpm", async (req, res) => {
  try {
    const { id } = req.params;
    const chats = await service.getChat(id);
    res.status(201).json(chats);
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});

chatRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data.users);
    const chat = await service.create(data.users);
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
});

module.exports = chatRouter;
