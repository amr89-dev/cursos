const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const Token = require("./token.model");

const User = sequelize.define("user", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "customer",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
});

User.hasOne(Token, {
  foreignKey: {
    field: "user_id",
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = User;
