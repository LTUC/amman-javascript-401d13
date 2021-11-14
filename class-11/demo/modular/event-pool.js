'use strict';

const Events = require('events');
const events = new Events();

// we are exporting ONE instance of events
// this instance will be shared by all of our modules
// this is called Singleton (design pattern)
// if were to think of how the singleton works, think of it as a global instance that all the modules can see and use.

module.exports = events;