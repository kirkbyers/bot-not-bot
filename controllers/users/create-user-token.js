const jwt = require('jsonwebtoken');

async function createUserToken(user) {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(user, secret);
  return token;
}

module.exports = {
  createUserToken,
};
