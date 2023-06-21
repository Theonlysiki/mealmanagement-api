const express = require('express');
const router = express.Router();
const AddonCategoriesController = require('../controllers/addoncategories');

router.post('/:brandId/addon-categories', addonCategoriesController.createAddonCategory);

module.exports = router;
