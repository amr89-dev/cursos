const Joi = require("joi");
const { createUserSchema, updateUserSchema } = require("./user.schema");

const id = Joi.string().uuid();
const firstName = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.string().uuid();
const user = createUserSchema;

const createCustomerSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: user.required(),
});

const updateCustomerSchema = Joi.object({
  firstname: firstName,
  lastname: lastName,
  phone: phone,
  user: updateUserSchema,
});
const getCustomerSchema = Joi.object({
  id: userId.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
