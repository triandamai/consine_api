/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const router = require("./app/routes/index");
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
app.use("/", router);
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });