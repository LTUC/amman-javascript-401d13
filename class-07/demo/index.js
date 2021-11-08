'use strict';
const server = require('./server.js');
const { sequelize } = require('./models/index.js');

sequelize.sync()
  .then(() => {
    server.listen(3000, () => {
      console.log('Server UP');
    });
  });