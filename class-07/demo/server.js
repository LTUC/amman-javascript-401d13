require('dotenv').config();

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./models/users.model');
const bearer = require('./middleware/bearer.middleware');
const basic = require('./middleware/basic.middleware');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.post('/sign-up', async (req, res) => {
  try {
    // hash the password within the req body
    req.body.password = await bcrypt.hash(req.body.password, 5);
    // create the new user Record 
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(403).send("Error occurred");
  }
});

app.get('/user', bearer, (req, res) => {
  res.json({
    'message': 'You are authorized to view the user profile',
    'user': req.user
  });
});

app.post('/sign-in', basic, async (req, res) => {
  res.status(200).json(req.user);
});


module.exports = app;