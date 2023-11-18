const Joi = require("joi");
const { createItemSchema } = require("./item.schema");

const id = Joi.string().uuid();
const customerId = Joi.string().uuid();
const status = Joi.valid(
  "pending",
  "processing",
  "shipped",
  "delivered",
  "canceled"
);
const items = Joi.array().items(createItemSchema);

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
  status,
  items,
});
const updateOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema };
