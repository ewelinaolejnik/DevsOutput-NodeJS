const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries');

router.get('/countries', countriesController.getCountries);

module.exports = router;