const jwt = require('jsonwebtoken');
const { validateUserToken } = require('../controllers');

function authenticateRoute(req, res, next) {
  if (!req.signedCookies.auth) {
    return res.status(401).json('Login needed');
  }
  if (validateUserToken(req.signedCookies.auth)) {
    const user = jwt.decode(req.signedCookies.auth);
    req.user = user;
    return next();
  }
  res.clearCookie('auth');
  return res.status(401).send('Login needed');
}

module.exports = authenticateRoute;
