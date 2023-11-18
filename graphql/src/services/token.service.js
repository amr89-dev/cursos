const Token = require("../db/models/token.model");
const User = require("../db/models/user.model");

class TokenService {
  async getToken(id) {
    const token = Token.findByPk(id);
    return token;
  }
  async createToken(token, userId) {
    const newToken = await Token.create({ token, userId });

    return newToken;
  }
}

module.exports = TokenService;
