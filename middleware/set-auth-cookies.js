function setAuthCookies(req, res, next) {
  if (req.query.auth && !req.signedCookies.auth) {
    // TODO: verify auth token query param
    res.cookie('auth', req.query.auth, { signed: true });
  }
  next();
}

module.exports = setAuthCookies;
