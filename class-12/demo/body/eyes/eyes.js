'use strict';


const io = require('socket.io-client');

/* ------ CONNECT ---------- */
const host = 'http://localhost:3000';
const brainConnection = io.connect(host);

/* ------ Listener ---------- */
brainConnection.on('brightness', handelBrightness);

/* ------ Event Handler ---------- */
function handelBrightness(payload) {

  if (payload.level >= 50) {
    console.log('Eyes are squinting');
  } else {
    console.log('Its not that bad, its not that bright. :eyes:');
  }
}