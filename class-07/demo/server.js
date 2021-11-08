require('dotenv').config();

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./models/usersModel.js');
const basic = require('./middleware/basic.js');
const bearer = require('./middleware/bearer.js');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.post('/sign-up', async (req, res) => {
});

app.post('/sign-in', basic, async (req, res) => {
});


module.exports = app;