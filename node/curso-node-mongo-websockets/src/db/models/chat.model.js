const mongoose = require("mongoose");

const Chat = mongoose.model("Chat", {
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = Chat;
