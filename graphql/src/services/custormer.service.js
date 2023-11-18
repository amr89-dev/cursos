const boom = require("@hapi/boom");
const Customer = require("../db/models/customer.model");
const bcrypt = require("bcrypt");

class CustomerService {
  constructor() {}
  async find() {
    const rta = await Customer.findAll({
      include: ["user"],
    });
    return rta;
  }
  async findOne(id) {
    const user = await Customer.findByPk(id);
    if (!user) {
      throw boom.notFound("customer not found");
    }
    return user;
  }
  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash,
      },
    };
    const newCustomer = await Customer.create(newData, {
      include: ["user"],
    });
    delete newCustomer.user.dataValues.password;
    return newCustomer;
  }
  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;
  }
  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { rta: true };
  }
}

module.exports = CustomerService;
