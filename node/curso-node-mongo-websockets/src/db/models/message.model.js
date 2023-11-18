const mongoose = require("mongoose");

const Message = mongoose.model("Message", {
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  chat: {
    type: mongoose.Schema.ObjectId,
    ref: "Chat",
  },
  message: {
    type: String,
  },
  file: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

module.exports = Message;
