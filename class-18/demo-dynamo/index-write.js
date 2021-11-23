'use strict';

const contactModel = require('./contacts.schema');

const dynamoose = require('dynamoose');

const uuid = require('uuid').v4;


exports.handler = async (event) => {
  const {
    name,
    phone
  } = JSON.parse(event.body);

  const id = uuid();

  const record = new contactModel({ id, name, phone });

  const data = await record.save();

  return {
    statusCode: 201,
    body: JSON.stringify(data)
  }
}