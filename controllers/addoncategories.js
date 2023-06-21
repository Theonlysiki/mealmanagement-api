const { validationResult } = require('express-validator');
const AddonCategory = require('../models/addoncategory');

exports.createAddonCategory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const { brandId } = req.params;

    try {
        const category = await AddonCategory.create({ name, brandId });
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: 'Error creating category' });
    }
};

