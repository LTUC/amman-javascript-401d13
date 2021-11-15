'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const brainConnection = io.connect(host);
const healthConnection = io.connect(`${host}/health-system`);
const digestiveSystemConnection = io.connect(`${host}/digestive-system`);

brainConnection.emit('light', { level: 10 });
brainConnection.emit('light', { level: 60 });

healthConnection.emit('smell', { scent: 'pizza' });

digestiveSystemConnection.emit('getFood', { item: 'pizza 🍕' });