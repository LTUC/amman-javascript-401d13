'use strict';
const server = require('./server.js');
const { sequelize } = require('./models/index.js');
require('dotenv').config();
const PORT = process.env.PORT || 'some secret word';

sequelize.sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server UP in port ${PORT}`);
    });
  });