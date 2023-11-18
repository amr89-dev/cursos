const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const User = require("./user.model");

const Customer = sequelize.define("customer", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "last_name",
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
});

Customer.belongsTo(User, {
  foreignKey: {
    field: "user_id",
    allowNull: false,
    unique: true,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  as: "user",
});

User.hasOne(Customer, {
  as: "customer",
  foreignKey: "userId",
});

module.exports = Customer;
