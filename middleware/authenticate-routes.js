const { validateUserToken } = require('../controllers');

function authenticateRoute(req, res, next) {
  if (!req.signedCookies.auth) {
    res.status(401).send('Login needed');
  }
  if (validateUserToken(req.signedCookies.auth)) {
    next();
  } else {
    res.clearCookie('auth');
    res.status(401).send('Login needed');
  }
}

module.exports = authenticateRoute;
