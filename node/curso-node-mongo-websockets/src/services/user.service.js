const bcrypt = require("bcrypt");
const User = require("../db/models/user.model");

class UserService {
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = {
      ...data,
      password: hash,
    };
    await User.create(newUser);
    delete newUser.password;
    return newUser;
  }

  async getAll() {
    const users = await User.find({});
    return users;
  }

  async getUser(id) {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async updateUser(id, data) {
    const user = await User.findByIdAndUpdate(id, data);

    return user.id;
  }
  async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    return user.id;
  }
}

module.exports = UserService;
