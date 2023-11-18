const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const Order = require("./order.model");

const Item = sequelize.define("item", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
});

Order.belongsToMany(Item, {
  through: "OrderItem",
  foreignKey: "orderId",
});

Item.belongsToMany(Order, {
  through: "OrderItem",
  foreignKey: "itemId",
});
module.exports = Item;
