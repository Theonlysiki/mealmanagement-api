const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brands');

router.post('/', brandsController.createBrand);
router.get('/:brandId', brandsController.getBrand);

module.exports = router;
