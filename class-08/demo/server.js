require('dotenv').config();

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./models/users.model');
const bearer = require('./middleware/bearer.middleware');
const basic = require('./middleware/basic.middleware');
const acl = require('./middleware/acl.middleware');

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


app.post('/sign-in', basic, async (req, res) => {
  res.status(200).json(req.user);
});

app.get('/user', bearer, (req, res) => {
  res.json({
    'message': 'You are authorized to view the user profile',
    'user': req.user
  });
});

app.post('/img', bearer, acl('create'), (req, res) => {
  res.send('new img was created');
});
app.get('/img', bearer, acl('read'), (req, res) => {
  res.send('this is a new image');
});
app.put('/img', bearer, acl('update'), (req, res) => {
  res.send('new img was updated');
});
app.delete('/img', bearer, acl('delete'), (req, res) => {
  res.send('new img was deleted');
});

module.exports = app;