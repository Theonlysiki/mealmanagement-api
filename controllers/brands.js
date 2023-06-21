const { validationResult } = require('express-validator');
const Brand = require('../models/brand');

exports.createBrand = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
        const brand = await Brand.create({ name });
        res.status(201).json(brand);
    } catch (err) {
        res.status(500).json({ message: 'Error creating brand' });
    }
};

exports.getBrand = async (req, res) => {
    const { brandId } = req.params;

    try {
        const brand = await Brand.findByPk(brandId);
        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json(brand);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving brand' });
    }
};
