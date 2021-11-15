const io = require('socket.io-client');
const host = 'http://localhost:3000';
const healthConnection = io.connect(`${host}/health-system`);

healthConnection.on('food', foodSmellHandler);

function foodSmellHandler(payload) {
  console.log(`${payload.scent} smells amazing! 🍕`);
}