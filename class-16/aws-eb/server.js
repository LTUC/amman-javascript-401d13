'use strict';

const express = require('express');

const app = new express();

const PORT = process.env.PORT || 8080;

app.use(express.static('./public'));

app.get('/', (req, res) => {

  res.status(200).send('Its Pizza time 🍕🍕🍕🍕🍕');
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});