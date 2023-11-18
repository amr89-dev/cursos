const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const Customer = require("./customer.model");

const Order = sequelize.define("order", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  status: {
    type: DataTypes.ENUM(
      "pending",
      "processing",
      "shipped",
      "delivered",
      "canceled"
    ),
    allowNull: false,
    defaultValue: "pending",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
});

Order.belongsTo(Customer, {
  foreignKey: {
    field: "customer_id",
    allowNull: false,
    unique: true,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "customer",
});

Customer.hasMany(Order, {
  as: "orders",
  foreignKey: "customerId",
});

module.exports = Order;
