const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const APIError = require('../utils/error');

module.exports = {
  logDate: (req, res, next) => {
    const date = new Date();
    console.log(date.toUTCString());
    next();
  },
  verifyToken(req, res, next) {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decoded = decoded;
      next();
    } catch (error) {
      next(error.message);
    }
  },
  errorHandler: (error, req, res, next) => {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, '/../../access.log'), { flags: 'a' });
    accessLogStream.write(`${error.stack}\n`, 'utf-8');
    accessLogStream.end();
    if (error instanceof APIError) {
      res
        .status(error.statusCode)
        .json({
          statusCode: error.statusCode,
          message: error.message,
        });
    } else {
      res
        .status(500)
        .json({
          statusCode: 500,
          message: error.message,
        });
    }
    next();
  },
};
