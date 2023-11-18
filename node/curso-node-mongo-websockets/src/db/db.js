const mongoose = require("mongoose");
require("dotenv").config();

const { DB_PASSWORD } = process.env;
const URI = `mongodb+srv://amr-dev:${DB_PASSWORD}@cluster0.ydryvlq.mongodb.net/amrDB?retryWrites=true&w=majority`;

const mongooseDB = async () => {
  await mongoose.connect(URI);
};

module.exports = mongooseDB;
