const jwt = require("jsonwebtoken");

const secret =
  process.env.JWT_SECRET || "$ù;m,lnm1dsghé-(è53è_çèhi&5é6_çh4&éezpbuo4";

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "1h" });
}

function toData(token) {
  return jwt.verify(token, secret);
}

module.exports = { toJWT, toData };
