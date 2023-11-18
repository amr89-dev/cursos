const ProductServices = require("../services/product.service");

const productService = new ProductServices();
//Los resolvers no necesariamente tienen que ser funciones asincronas pero si se usan funciones asincronas se debe usar await.

const getProduct = (_, { id }) => {
  const product = productService.findOne(id);
  return product;
};

const getProducts = () => {
  const products = productService.find({});
  return products;
};

const addProduct = (_, { dto }) => {
  const product = productService.create(dto);
  return product;
};

const updateProduct = (_, { id, dto }) => {
  const product = productService.update(id, dto);
  return product;
};

const deleteProduct = (_, { id }) => {
  const product = productService.delete(id);
  return product;
};

const getProductsByCategory = async (parent) => {
  const { id } = parent.dataValues;
  const products = await productService.findByCategory(id);
  return products;
};
module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
