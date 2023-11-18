const boom = require("@hapi/boom");
const User = require("../db/models/user.model");
const bcrypt = require("bcrypt");
class UserService {
  constructor() {}

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

  async find() {
    const users = User.findAll({
      include: ["customer"],
    });
    return users;
  }
  async findByEmail(email) {
    const user = User.findOne({
      where: { email },
    });
    return user;
  }

  async findOne(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { rta: true };
  }
}

module.exports = UserService;
