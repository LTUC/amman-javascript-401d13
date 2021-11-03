'use strict';

const express = require('express');

const router = express.Router();

const {orderCollection} = require('../models/index');

router.get('/order',getOrder);
router.post('/order',createOrder);


async function getOrder(req,res) {
    let order = await orderCollection.read();
    res.status(200).json(order);
}

async function createOrder(req,res) {
    let newOrdInfo = req.body;
    let order = await orderCollection.create(newOrdInfo);
    res.status(201).json(order);
}

module.exports = router;