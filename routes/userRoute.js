const express = require('express');
const { allUser, oneUser } = require('../controllers/userController');
const router = express.Router();

router.get('/user', allUser);
router.get('/user/:id', oneUser);


module.exports = router;