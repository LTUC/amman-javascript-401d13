'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const peopleRouter = require('./routes/people.route')

const PORT = process.env.PORT || 3030;

// global middleware
app.use(logger);
app.use(express.json());

// to make our people routers usable, use the people route with express
app.use(peopleRouter); // use the people routes

// this is a global middleware
app.use('*', notFoundHandler);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start
}