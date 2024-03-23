const express = require('express');
const { homePage, aboutPage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', homePage)
router.get('/about', aboutPage)


module.exports = router;