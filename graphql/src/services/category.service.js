const boom = require("@hapi/boom");
const Category = require("../db/models/category.model");

class CategoryService {
  constructor() {}
  async create(data) {
    const category = await Category.create(data);
    return category;
  }

  async find() {
    const categories = await Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = Category.findByPk(id, {
      // include: ["products"],
    });
    if (!category) {
      throw boom.notFound("Category not found");
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    const rta = await category.destroy();
    return rta;
  }
}

module.exports = CategoryService;
