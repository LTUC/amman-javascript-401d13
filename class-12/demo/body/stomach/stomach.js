const io = require('socket.io-client');
const host = 'http://localhost:3000';
const digestiveSystemConnection = io.connect(`${host}/digestive-system`);

digestiveSystemConnection.on('food', eatFoodHandler);


function eatFoodHandler(payload) {
  console.log(`I am eating the ${payload.item} nom nom nom nom nom nom  `);
}