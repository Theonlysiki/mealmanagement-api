// models/addonCategory.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const AddonCategory = sequelize.define('AddonCategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brandId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = AddonCategory;
