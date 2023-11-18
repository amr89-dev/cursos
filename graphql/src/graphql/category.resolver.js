const boom = require("@hapi/boom");
const CategoryService = require("./../services/category.service");
const checkRoleGQL = require("../utils/auth/checkRoleGQL");

const categoryService = new CategoryService();

const createCategory = async (_, { dto }, context) => {
  const { user } = await context.authenticate("jwt", { session: false });
  console.log(user);
  if (!user) {
    throw boom.unauthorized("You are not authenticated!");
  }

  console.log(user);

  checkRoleGQL(user, "customer");
  const category = await categoryService.create(dto);
  return category;
};

const getCategory = async (_, { id }) => {
  const category = await categoryService.findOne(id);
  return category;
};

const getCategories = async () => {
  const categories = await categoryService.find({});
  return categories;
};

module.exports = { createCategory, getCategory, getCategories };
