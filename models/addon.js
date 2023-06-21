// models/addon.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Addon = sequelize.define('Addon', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.STRING,
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    category: DataTypes.STRING,
    brandId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Addon;
