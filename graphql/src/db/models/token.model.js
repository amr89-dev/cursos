const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const User = require("./user.model");

const Token = sequelize.define("token", {
  token: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Token;

/* Token.belongsTo(User, {
  foreignKey: {
    field: "user_id",
    unique: true,
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
}); */
