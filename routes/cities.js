const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/cities');

router.get('/cities', citiesController.getCities);

module.exports = router;