const CustomerService = require("../services/custormer.service");

const customerService = new CustomerService();

const getCustomer = async (_, { id }) => {
  const customer = await customerService.findOne(id);
  return customer;
};

const getCustomers = async () => {
  const customers = await customerService.find({});
  return customers;
};

const addCustomer = async (_, { dto }) => {
  console.log(dto);
  const customer = await customerService.create(dto);
  return customer;
};

const updateCustomer = async (_, { id, dto }) => {
  const customer = await customerService.update(id, dto);
  return customer;
};

const deleteCustomer = async (_, { id }) => {
  const customer = await customerService.delete(id);
  return customer;
};

module.exports = {
  getCustomer,
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
