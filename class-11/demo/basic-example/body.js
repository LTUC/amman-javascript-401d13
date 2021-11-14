'use strict';

const Events = require('events'); // build in Lib within NOdeJs // no need to install anything form NPM

const events = new Events(); // created an instance of the event package


// we are registering events
// .on method is used to register events
events.on('light', pupil);
events.on('light', eyelids);

function pupil(payload) {
  console.log(`Eyes are dilated at ${payload.brightness}%`);
}

function eyelids(payload) {
  if (payload.brightness >= 70) {
    console.log(`Eyes are Squinting`);
  }
}

// setInterval is a promise based function that is used to delay request/ code being executed
setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);
  // we are calling, firing that event
  console.log('----------------------');
  // .emit is a method used to fire event
  events.emit('light', { brightness });
  console.log('----------------------');

}, 2000);
