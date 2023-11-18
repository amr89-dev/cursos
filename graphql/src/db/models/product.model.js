const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const Category = require("./category.model");

const Product = sequelize.define("product", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  description: {
    type: DataTypes.TEXT,
  },
});
Category.hasMany(Product, {
  foreignKey: {
    field: "categoriesId",
  },
  as: "products",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Product.belongsTo(Category, {
  as: "categories",
  foreignKey: { field: "categoriesId", allowNull: false },
});
module.exports = Product;
