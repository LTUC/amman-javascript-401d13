const dynamoose = require('dynamoose');

const pizzaUserSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String

});

module.exports = dynamoose.model('pizza-users', pizzaUserSchema);
