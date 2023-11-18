const { RegularExpression } = require("graphql-scalars");
const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("./product.resolver");

const {
  getCustomer,
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require("./customer.resolver");

const { login } = require("./auth.resolver");
const {
  createCategory,
  getCategory,
  getCategories,
} = require("./category.resolver");

const CategoryNameType = new RegularExpression(
  "CategoryNameType",
  /^[A-Za-z0-9]{3,8}$/
);
const resolvers = {
  Query: {
    hello: () => "Hello World",
    getPerson: (_, args) => `Hello ${args.name} you are ${args.age} years old`,
    getInt: () => 6,
    getFloat: () => 6.6,
    getBoolean: () => true,
    getID: () => "123456789",
    getNumberList: (_, args) => args.number.map((n) => n * 2),
    product: getProduct,
    products: getProducts,
    customer: getCustomer,
    customers: getCustomers,
    categories: getCategories,
    category: getCategory,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    login,
    createCategory,
  },
  CategoryNameType,
  Category: { products: getProductsByCategory },
};

module.exports = resolvers;
