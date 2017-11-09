import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import { setAuthCookies } from './middleware';
import apiIndex from './routes';
import { uiApp } from './ui-server-side';
import { fileImport } from './db';

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

// Add records to DB
if (process.env.IMPORT_FILE_PATH) {
  fileImport(process.env.IMPORT_FILE_PATH)
    .catch(err => console.log(err));
}

// Listen
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
