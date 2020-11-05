const express = require('express');

const { UserValidator } = require('../validators/index.js');
const { UserController } = require('../controllers/index.js');

const router = express.Router();

router.post('/signup', UserValidator.signup, UserController.signup);

router.post('/login', UserValidator.login, UserController.login);

module.exports = router;
