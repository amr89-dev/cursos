const Joi = require("joi");

const id = Joi.string().uuid();
const quantity = Joi.number();
const price = Joi.number();

const createItemSchema = Joi.object({
  id: id.required(),
  quantity: quantity.required(),
  price: price.required(),
});

const updateItemSchema = Joi.object({
  id: id.required(),
});

module.exports = { createItemSchema, updateItemSchema };
