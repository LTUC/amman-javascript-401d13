'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const stamper = require('./middleware/stamper');
/**
 * Proof of life route
 */
app.get('/', (req, res) => {
  res.status(200).send('All is good 🥳');
});

/**
 * general example data route
 */
app.get('/data', stamper, (req, res) => {

  const outputObject = {
    10: "even",
    5: "odd",
    "time": req.timestamp // we got this from the middleware
  };

  res.status(200).json(outputObject);
});


app.get('/bad', (req, res, next) => {
  // next('You made an Error 🛑❗');
  throw new Error('You made an Error 🛑❗');
});

// Middle wares
app.use('*', notFoundHandler); // for handling undefined paths
app.use(errorHandler); // this for handling general server errors

/**
 * Server start function
 */
function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

module.exports = {
  app,
  start
};


