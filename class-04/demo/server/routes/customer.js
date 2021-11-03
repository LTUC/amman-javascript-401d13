'use strict';

const express = require('express');

const router = express.Router();

const {customerCollection} = require('../models/index');

router.get('/customer',getCustomer);
router.post('/customer',createCustomer);


async function getCustomer(req,res) {
    let customer = await customerCollection.read();
    res.status(200).json(customer);
}

async function createCustomer(req,res) {
    let newCusInfo = req.body;
    let customer = await customerCollection.create(newCusInfo);
    res.status(201).json(customer);
}

module.exports = router;