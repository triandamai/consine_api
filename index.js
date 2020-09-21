/**
 * Required External Modules
 */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./app/routes/index');
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || '4000';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
/**
 *  App Configuration
 */
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    ' GET, PUT, POST, DELETE, OPTIONS'
  );
  res.header('Content-Type', 'application/json');
  res.header('Content-Type', 'application/x-www-form-urlencoded');
  next();
});

/**
 * Routes Definitions
 */
app.use('/', router);
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
