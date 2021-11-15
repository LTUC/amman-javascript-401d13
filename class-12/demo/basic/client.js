'use strict';
// this client is going to be our User, also known as a socket

const io = require("socket.io-client");

// this socket will need to know which host (server, namespace)  its going to connect to 
let host = 'http://localhost:3000';

// we are connecting the socket to the host
const socket = io.connect(host);


socket.emit('hello', 'Tamim');

socket.on('hi', (payload) => {
  console.log('The server said: ', payload);

});