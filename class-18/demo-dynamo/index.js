'use strict';

const dynamoose = require('dynamoose');
const PizzaUserModel = require('./pizza-users.schema');


exports.handler = async (event) => {

  // in lambda its called path parameters
  const id = event.pathParameters.id;

  try {
    let data;
    if (id) {
      const list = await contactModel.query(id).eq(id).exec();
      data = list[0];
    } else {
      data = await contactModel.scan().exec();

    }


    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        'error': 'true',
        'message': error.message
      })
    }
  }
}