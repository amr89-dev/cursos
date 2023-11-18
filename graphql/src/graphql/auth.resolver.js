const jwt = require("jsonwebtoken");

const TokenService = require("../services/token.service");
const service = new TokenService();

const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

const sign = (payload, isAccessToken) => {
  return jwt.sign(payload, isAccessToken ? JWT_SECRET : JWT_REFRESH_SECRET, {
    expiresIn: 3600,
  });
};
const generateAccessToken = (payload) => {
  return sign(payload, true);
};
const generateRefreshToken = (payload) => {
  return sign(payload, false);
};

const login = async (_, { email, password }, context) => {
  const auth = await context.authenticate("graphql-local", {
    email,
    password,
  });

  const user = await auth.user.dataValues;

  const payload = {
    role: user.role,
    sub: user.id,
  };

  const generateTokens = (data) => {
    const refreshToken = generateRefreshToken(data);
    const accessToken = generateAccessToken(data);
    return { refreshToken, accessToken };
  };

  const { refreshToken, accessToken } = generateTokens(payload);
  await service.createToken(refreshToken, user.id);

  return { user, accessToken, refreshToken };
};

module.exports = { login };
