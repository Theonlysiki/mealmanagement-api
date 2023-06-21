const { validationResult } = require('express-validator');
const Addon = require('../models/addon');

exports.createAddon = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, category } = req.body;
    const { brandId } = req.params;

    try {
        const addon = await Addon.create({ name, description, price, category, brandId });
        res.status(201).json(addon);
    } catch (err) {
        res.status(500).json({ message: 'Error creating addon' });
    }
};

exports.getAllAddons = async (req, res) => {
    const { brandId } = req.params;

    try {
        const addons = await Addon.findAll({ where: { brandId } });
        res.json(addons);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving addons' });
    }
};

exports.getAddon = async (req, res) => {
    const { addonId } = req.params;

    try {
        const addon = await Addon.findByPk(addonId);
        if (!addon) {
            return res.status(404).json({ message: 'Addon not found' });
        }
        res.json(addon);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving addon' });
    }
};

exports.updateAddon = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, category } = req.body;
    const { addonId } = req.params;

    try {
        const addon = await Addon.findByPk(addonId);
        if (!addon) {
            return res.status(404).json({ message: 'Addon not found' });
        }

        if (name) addon.name = name;
        if (description) addon.description = description;
        if (price) addon.price = price;
        if (category) addon.category = category;
        await addon.save();

        res.json(addon);
    } catch (err) {
        res.status(500).json({ message: 'Error updating addon' });
    }
};

exports.deleteAddon = async (req, res) => {
    const { addonId } = req.params;

    try {
        const addon = await Addon.findByPk(addonId);
        if (!addon) {
            return res.status(404).json({ message: 'Addon not found' });
        }

        await addon.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting addon' });
    }
};
