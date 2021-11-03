'use strict';


const customer = (sequelize,DataTypes) =>
    sequelize.define('customer',{
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });

module.exports = customer;