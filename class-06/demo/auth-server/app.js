'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

// Prepare the express app
const app = express();
app.use(express.json()); // parse the request body from the payload

// process FORM input with the basic Authentication in it/ prase it into the req.body
app.use(express.urlencoded({ extended: true }));


// connect to postgres database
const sequelize = new Sequelize('postgres://localhost:5432/auth');

/**
 * TODO:
 * - we need to create a schema for our Users/ model/ table [x]
 * - then we need to create two routes:
 *   - a sign-up route [x]
 *     - the sign up route should hash the password and store it in the Users Table
 *   - a sign-in route[x]
 *     - the sign in route should read the hashed password from the DB and compare it to the one that the
 *       user is sending with the request
 *
 */

// Create a a Sequelize Model
const Users = sequelize.define('User', {

  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


app.post('/sign-up', async (req, res) => {

  // we need to parse the data from the body req
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

app.post('/sign-in', async (req, res) => {
  try {
    const encodedHeaders = req.headers.authorization.split(' ')[1]; // "Basic dGFtaW06cGl6emE="
    const [username, password] = base64.decode(encodedHeaders).split(':'); // spread operator
    console.log('username: ', username);
    console.log('password: ', password); // password in plain text after base64 decoding

    // get the user form the database 
    const user = await Users.findOne({ where: { username } });
    // compare the users' password from the DB with the on that was submitted in the form
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    } else {
      res.status(500).json({ 'error': 'username or password incorrect!' })
    }
  } catch (error) {
    res.status(403).send("An Error Occurred!");
  }
});





// kick off the server
sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });