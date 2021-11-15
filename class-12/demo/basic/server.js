'use strict';


// this is one way to connect to socket IO, or create a socket IO server
// const { Server } = require("socket.io");

// const io = new Server(3000);

// this is another way to connect
// we are basically saying this: http://localhost:3000
// we are almost saying that we are creating the root route for our Socket.io server
const io = require("socket.io")(3000);
// what we really are doing we are creating the / or root namespace
// console.log(io);

io.on("connection", (socket) => {
  console.log('Welcome, your socket id is:', socket.id);

  socket.on('hello', (payload) => {
    console.log('The server heard the hello event. Payload:', payload);
    // the client is going to hear this and run some code
    // Technically, you are calling a function on some other app, over the internet!
    io.emit('hi', `Hi, ${payload}`);
  });
});

io.emit('connection');