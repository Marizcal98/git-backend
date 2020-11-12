/* eslint-disable no-console */
const express = require('express');
const { UserController } = require('../controllers/index.js');
const { UserValidator } = require('../validators/index.js');
const { verifyToken } = require('../middlewares/index.js');

const router = express.Router();

// READ
router.get('/users/:id', verifyToken, UserValidator.findOne, UserController.findOne);
// UPDATE
router.patch('/users', verifyToken, /* validator */ UserController.updateOne);
// DELETE
router.delete('/users', verifyToken, /* validator */ UserController.deleteOne);

module.exports = router;
