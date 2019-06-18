const express = require('express');
const router = express.Router();
const conferencesController = require('../controllers/conferences');

router.get('/conferences', conferencesController.getConferences);

module.exports = router;