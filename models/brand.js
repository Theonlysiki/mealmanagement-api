// models/brand.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Brand = sequelize.define('Brand', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // other fields can be added here as necessary
});

module.exports = Brand;
