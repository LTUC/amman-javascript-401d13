'use strict';

const client = require('socket.io-client');
const host = 'http://localhost:3000/family';

const socket = client.connect(host);

// whenever I connet, go and pull all the msgs from the Q
socket.emit('get_all');

// 4_2
socket.on('chore',payload=>{
    console.log('child received the chore', payload);
    // 5
    socket.emit('received',payload)
})