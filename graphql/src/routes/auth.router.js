const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const TokenService = require("../services/token.service");
const Token = require("../db/models/token.model");
const User = require("../db/models/user.model");
require("dotenv").config();
const service = new TokenService();

const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

const sign = (payload, isAccessToken) => {
  return jwt.sign(payload, isAccessToken ? JWT_SECRET : JWT_REFRESH_SECRET, {
    expiresIn: 3600,
  });
};
const generateAccessToken = (payload) => sign(payload, true);
const generateRefreshToken = (payload) => sign(payload, false);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        role: user.role,
        sub: user.id,
      };

      const accessToken = await generateAccessToken(payload);
      const refreshToken = await generateRefreshToken(payload);
      await service.createToken(refreshToken, user.id);
      res.json({ user, accessToken, refreshToken });
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const token = await Token.findOne({
        where: {
          user_id: req.user.sub,
        },
        order: [["createdAt", "DESC"]],
      });

      await token.destroy();
      res.json({ message: "Sesión Cerrada" });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/token", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = !authorization?.split(" ")[1]
      ? null
      : authorization.split(" ")[1].replace(/^"(.*)"$/, "$1");
    if (!token) {
      throw new Error();
    }

    const tokenFound = await Token.findOne({
      where: { token },
    });

    const tokenVerify = await jwt.verify(tokenFound.token, JWT_REFRESH_SECRET);

    delete tokenVerify.exp;

    const accessToken = await generateAccessToken(tokenVerify);

    res.json({
      user: tokenVerify,
      refreshToken: tokenFound.token,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
