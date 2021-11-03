'use strict';
require('dotenv').config();

const server = require('./server.js');
const {db} = require('./models/index');

db.sync().then(()=>{
    server.start(process.env.PORT|| 3000);
})
.catch(console.error)

