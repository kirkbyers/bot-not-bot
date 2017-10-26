const express = require('express');
const morgan = require('morgan');

const app = express();

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // Set dev-mode express options
  app.use(morgan('tiny'));
}

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
