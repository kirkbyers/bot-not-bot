const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes');

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

// Route
app.use('/', index);

// Listen
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
