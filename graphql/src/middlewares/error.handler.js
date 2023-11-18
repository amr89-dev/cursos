const { ValidationError } = require("sequelize");

const errorLog = (err, req, res, next) => {
  console.error(err);
  next(err);
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};
const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res
      .status(409)
      .json({ statusCode: 409, message: err.message, errors: err.errors });
  } else {
    next(err);
  }
};
const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.name === "TokenExpiredError") {
    return res.status(498).json({
      message: err.message,
      stack: err.stack,
    });
  }
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = {
  errorLog,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
};
