const express = require('express');
const router = express.Router();
const { createAddon, getAllAddons, getAddon, updateAddon, deleteAddon } = require('../controllers/addons');

router.post('/:brandId/addons', createAddon);
router.get('/:brandId/addons', getAllAddons);
router.get('/:brandId/addons/:addonId', getAddon);
router.patch('/:brandId/addons/:addonId', updateAddon);
router.delete('/:brandId/addons/:addonId', deleteAddon);

module.exports = router;
