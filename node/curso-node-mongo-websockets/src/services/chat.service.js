const Chat = require("../db/models/chat.model");

class ChatService {
  async create(users) {
    console.log(users);
    if (!users || !Array.isArray(users)) {
      throw new Error("Invalid data");
    }

    const data = {
      users,
    };
    const chat = await Chat.create(data);
    return chat;
  }

  async getChat(id) {
    let filter = {};
    if (id) {
      filter = {
        users: id,
      };
    }

    const chats = await Chat.find(filter).populate("users");
    return chats;
  }
}

module.exports = ChatService;
