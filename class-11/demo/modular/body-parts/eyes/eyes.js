'use strict';

const events = require('../../event-pool');


events.on('light', pupil);
events.on('light', eyelids);

function pupil(payload) {
  console.log(`Eyes are dilated at ${payload.brightness}%`);
}

function eyelids(payload) {
  if (payload.brightness >= 50) {
    console.log(`Eyes are Squinting`);
  }
}


setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);
  // we are calling, firing that event
  console.log('----------------------');
  // .emit is a method used t o fire event
  events.emit('light-detector', { brightness });
  console.log('----------------------');

}, 2000);