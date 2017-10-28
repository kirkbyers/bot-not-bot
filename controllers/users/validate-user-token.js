const jwt = require('jsonwebtoken');

function validateUserToken(token) {
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  validateUserToken,
};
