'use strict';

const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({
  region: 'Ohio', // this points to our server that contains our services
  // sns: '2010-03-31',
})

function publishMessage() {
  const params = {
    Message: 'New pizza recipes came out!!!! 🍕🍕🍕',
    // TopicArn: 'arn:aws:sns:123123123:12312312312:', /// you can do this
    TopicArn: process.env.TOPIC_ARN, // but i prefer if we were to use env variables
  }

  // we are promisifying the publish call back function
  // why? because the SNS api last version was published in 2010 when ES6 wasn't yet introduced
  // promises are an ES6 feature not ES5
  const publishSNS = new AWS.SNS({ apiVersion: '2010-03-31', }).publish(params).promise();

  publishSNS.then(res => {
    console.log('published', res.MessageId);
  }).catch(error => console.log(error));
}


publishMessage();