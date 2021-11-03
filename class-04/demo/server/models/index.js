'use strict';

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://razanatallah:12345@localhost:5432/class4db";

const {Sequelize,DataTypes} = require('sequelize');


let seqOptions = {};

let sequelize = new Sequelize(DATABASE_URL,seqOptions);

const customerSchema = require('./customer.schema.js');
const orderSchema = require('./order.schema.js');

const customerModel = customerSchema(sequelize,DataTypes);
const orderModel = orderSchema(sequelize,DataTypes);

customerModel.hasMany(orderModel,{foreignKey:'customerId',sourceKey:'id'});
orderModel.belongsTo(customerModel,{foreignKey:'customerId',targetKey:'id'})

const Collection = require('./lib/collection.js');

const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);


module.exports = {
    db: sequelize,
    customerCollection: customerCollection,
    orderCollection: orderCollection
}