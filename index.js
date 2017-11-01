const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { setAuthCookies } = require('./middleware');
const apiIndex = require('./routes');
const { uiApp } = require('./ui-server-side');

const app = express();

// logging
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // Set dev-mode express options
  app.use('/', morgan('tiny'));
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse cookeies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Check for auth querystring
app.use(setAuthCookies);

// Route
app.use('/', apiIndex);

// UI SSR
const uiHandler = uiApp.getRequestHandler();

uiApp.prepare()
  .then(() => {
    app.get('*', (req, res) => uiHandler(req, res));
  })
  .catch((err) => {
    console.log(err.stack);
  });

// Listen
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
