const socket = require("../../socket").socket;
const Message = require("../db/models/Message.model");

class MessageService {
  async create(data, file) {
    let fileURL = "";
    let dataFile = data;
    if (file) {
      fileURL = `http://localhost:3001/uploads/${file.filename}`;
      dataFile = {
        ...data,
        file: fileURL,
      };
    }

    const newMessage = await Message.create(dataFile);
    socket.io.emit("message", newMessage);
    return newMessage;
  }
  async getAll() {
    const messages = await Message.find().populate("user");
    return messages;
  }

  async getMessage(id) {
    const message = await Message.findById(id);
    return message;
  }

  async updateMessage(id, data) {
    const message = await Message.findByIdAndUpdate(id, data);
    return message;
  }
  async deleteMessage(id) {
    const message = await Message.findByIdAndDelete(id);
    return message;
  }
}

module.exports = MessageService;
