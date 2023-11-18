const Category = require("../models/category.model");

const data = [
  { name: "ropa-hombre" },
  { name: "ropa-mujer" },
  { name: "zapatos-hombre" },
  { name: "zapatos-mujer" },
  { name: "accesorios" },
];

const loadCategories = async () => {
  try {
    const categoriesCount = await Category.count();

    if (categoriesCount <= 0) {
      await Category.bulkCreate(data);
      console.log("Categorias cargadas");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loadCategories;
