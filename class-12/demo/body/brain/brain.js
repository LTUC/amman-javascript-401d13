'use strict';

const PORT = process.env.PORT || 3000;

// we created the "/" namespace or we can say the home route
const brain = require('socket.io')(PORT);

// We are declaring a new namespace under the brain server
// Namespaces are parts of the server, just like routes
const healthSystem = brain.of('/health-system');
const digestiveSystem = brain.of('/digestive-system');

// Global Hub ('/') -- all connection and all events goes here and every other client
brain.on('connection', (socket) => {

  console.log('CONNECTED', socket.id);

  socket.on('light', (payload) => {
    console.log('SERVER EVENT: light level: ', payload);
    brain.emit('brightness', payload);
  });

});


// sub connection for the healthSystem namespace
// (/health-system)
healthSystem.on('connection', (socket) => {

  console.log('HEALTHCARE CONNECTED', socket.id);
  socket.on('smell', (payload) => {
    console.log('I got here from the fire event');
    healthSystem.emit('food', payload);

  });
});

digestiveSystem.on('connection', (socket) => {

  console.log('DIGESTIVE SYSTEM CONNECTED', socket.id);
  socket.on('getFood', (payload) => {
    console.log('I got the food from fire event');
    digestiveSystem.emit('food', payload);

  });
});
