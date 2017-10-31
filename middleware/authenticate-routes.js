const jwt = require('jsonwebtoken');
const { validateUserToken } = require('../controllers');

function authenticateRoute(req, res, next) {
  if (!req.signedCookies.auth) {
    res.status(401).send('Login needed');
  }
  if (validateUserToken(req.signedCookies.auth)) {
    const user = jwt.decode(req.signedCookies.auth);
    req.user = user;
    next();
  } else {
    res.clearCookie('auth');
    res.status(401).send('Login needed');
  }
}

module.exports = authenticateRoute;
