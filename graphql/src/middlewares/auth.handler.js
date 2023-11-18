const boom = require("@hapi/boom");
require("dotenv").config();

const { API_KEY } = process.env;

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["key"];
  console.log(API_KEY);
  if (apiKey === API_KEY) {
    next();
  } else {
    next(boom.unauthorized());
  }
};

const checkAdminRole = (req, res, next) => {
  const user = req.user;
  if (user.role === "admin") {
    next();
  } else {
    next(boom.unauthorized());
  }
};

const checkRoles = (...roles) => {
  return (req, res, next) => {
    const user = req.user;

    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
};
module.exports = { checkApiKey, checkAdminRole, checkRoles };
