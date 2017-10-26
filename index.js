const express = require('express');
const morgan = require('morgan');

const index = require('./routes');

const app = express();

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // Set dev-mode express options
  app.use('/', morgan('tiny'));
}

app.use('/', index);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
