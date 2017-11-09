const jwt = require('jsonwebtoken');
const { validateUserToken } = require('../controllers');

function authenticateRoute(req, res, next) {
  if (!req.signedCookies.auth && !req.headers.auth) {
    return res.status(401).json('Login needed');
  }
  const authToken = req.signedCookies.auth || req.headers.auth;
  if (validateUserToken(authToken)) {
    const user = jwt.decode(authToken);
    req.user = user;
    return next();
  }
  res.clearCookie('auth');
  return res.status(401).send('Login outdated');
}

module.exports = authenticateRoute;
