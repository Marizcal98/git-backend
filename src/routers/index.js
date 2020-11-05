const express = require('express');
const UserRouter = require('./UserRouter.js');
const AuthRouter = require('./AuthRouter.js');

const router = express.Router();

router.use(UserRouter);
router.use(AuthRouter);

module.exports = router;
