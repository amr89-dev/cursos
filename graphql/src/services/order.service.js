const boom = require("@hapi/boom");
const Order = require("../db/models/order.model");
const Item = require("../db/models/item.model");

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await Order.create(data);
    const items = await Item.bulkCreate(data.items);
    await newOrder.addItems(items);
    return newOrder;
  }

  async find() {
    const orders = await Order.findAll({
      include: ["items"],
    });
    return orders;
  }

  async findByUser(userId) {
    const orders = await Order.findAll({
      where: {
        "$customer.user.id": userId,
      },
      include: [
        {
          association: "customer",
          include: ["user"],
        },
        {
          model: Item,
        },
      ],
    });
    return orders;
  }

  async findOne(id) {
    const order = await Order.findByPk(id, {
      include: [
        {
          association: "customer",
          include: ["user"],
        },
        {
          model: Item,
        },
      ],
    });

    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = OrderService;
