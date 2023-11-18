const boom = require("@hapi/boom");

const checkRoleGQL = (user, ...roles) => {
  if (!roles.includes(user.role)) {
    throw boom.unauthorized("You are not authorized!");
  }
};

module.exports = checkRoleGQL;
