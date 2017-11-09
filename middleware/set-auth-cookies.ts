const { validateUserToken } = require('../controllers');

function setAuthCookies(req, res, next) {
  if (req.query.auth && !req.signedCookies.auth) {
    // TODO: verify auth token query param
    if (validateUserToken(req.query.auth)) {
      res.cookie('auth', req.query.auth, { signed: true });
      req.headers.auth = req.query.auth;
    }
  }
  next();
}

module.exports = setAuthCookies;