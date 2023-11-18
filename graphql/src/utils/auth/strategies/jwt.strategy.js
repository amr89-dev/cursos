const { Strategy, ExtractJwt } = require("passport-jwt");
require("dotenv").config();

const { JWT_SECRET } = process.env;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};
const JwtStrategy = new Strategy(options, async (payload, done) => {
  try {
    return done(null, payload);
  } catch (error) {
    done(error, false);
  }
});

module.exports = JwtStrategy;
