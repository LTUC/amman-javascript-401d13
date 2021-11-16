'use strict';

const client = require('socket.io-client');
const host = 'http://localhost:3000/family';

const socket = client.connect(host);

// 1
socket.emit('new_chore','wash the dishes');

// const chores = [
//     'clean your room',
//     'go to sleep'
// ]
// chores.forEach(chore=>{
//     socket.emit('new_chore',chore);
// })

// console.log(process.argv);

// const value = process.argv.splice(2)[0];
// console.log(value);
// socket.emit('new_chore',value);

// const chores = process.argv.splice(2);
// console.log(chores);
// chores.forEach(chore=>{
//     socket.emit('new_chore',chore);
// })




// 3_2
socket.on('added',payload=>{
    console.log('Thank u for adding my task to the Q>> ',payload);
    socket.disconnect();
})

