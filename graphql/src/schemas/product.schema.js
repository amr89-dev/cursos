const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string()
  .required()
  .max(50)
  .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const images = Joi.array().items(Joi.string().uri());
const categoriesId = Joi.string().uuid();
const categoryName = Joi.string();
const limit = Joi.number();
const offset = Joi.number();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  images,
  categoryName,
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description.required(),
  images,
  categoriesId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when("price_min", {
    is: Joi.number().integer().required(),
    then: Joi.required(),
  }),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
};
