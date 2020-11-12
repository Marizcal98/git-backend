const express = require('express');
const UserRouter = require('./UserRouter.js');
const AuthRouter = require('./AuthRouter.js');
const PostRouter = require('./PostRouter.js');

const router = express.Router();

router.use(UserRouter);
router.use(AuthRouter);
router.use(PostRouter);

module.exports = router;
