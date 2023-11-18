const customerRouter = require("express").Router();
const validatorHandler = require("../middlewares/validator.handler");
const CustomerService = require("../services/custormer.service");
const service = new CustomerService();
const {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema,
} = require("../schemas/customer.schema");

customerRouter.get("/", async (req, res, next) => {
  try {
    const customers = await service.find();
    res.status(201).json(customers);
  } catch (err) {
    next(err);
  }
});

customerRouter.post(
  "/",
  validatorHandler(createCustomerSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const customer = await service.create(data);
      res.status(201).json(customer);
    } catch (err) {
      next(err);
    }
  }
);
customerRouter.get(
  "/:id",
  validatorHandler(getCustomerSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.status(201).json(customer);
    } catch (err) {
      next(err);
    }
  }
);

customerRouter.put(
  "/:id",
  validatorHandler(getCustomerSchema, "params"),
  validatorHandler(updateCustomerSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const customer = await service.update(id, changes);
      res.status(201).json({
        customer,
        message: "El cliente ha sido actualizado correctamente",
      });
    } catch (err) {
      next(err);
    }
  }
);
customerRouter.delete(
  "/:id",
  validatorHandler(getCustomerSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({
        message: "El cliente ha sido eliminado correctamente",
      });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = customerRouter;
