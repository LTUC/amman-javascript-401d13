'use strict';

const events = require('./event-pool'); // our singleton instance

// we are basically dumping the eyes.js in this file
require('./body-parts/eyes/eyes');
require('./body-parts/arm/arm');

events.on('light-detector', (payload) => {
  console.log(payload);
  events.emit('light', { brightness: payload.brightness });
});