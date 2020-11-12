const { UserService } = require('../services/index.js');
const APIError = require('../utils/error.js');
const auth = require('../utils/auth.js');

module.exports = {
  signup: async (req, res, next) => {
    try {
      const { body } = req;
      const user = await UserService.create(body);
      user.password = undefined;
      res.status(201).json({ message: 'User created', payload: user });
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.findOneByEmail(email);
      if (!user) throw new APIError('Error on credentials.', 400);
      const isValid = auth.comparePasswords(password, user.password);
      if (!isValid) throw new APIError('Error on credentials', 400);
      const token = auth.createToken(user);
      res.status(200).json({ message: 'Log in', payload: token });
    } catch (error) {
      next(error);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { params } = req;
      const user = await UserService.findOne(params.id).populate('Posts');
      user.password = undefined;
      res.status(200).json({ message: 'Ok', payload: user });
    } catch (error) {
      next(error);
    }
  },
  updateOne: async (req, res, next) => {
    try {
      const { body, decoded } = req;
      const user = await UserService.findOne(decoded.id);
      const updatedUser = await UserService.updateOne(user, body);
      user.password = undefined;
      res.status(200).json({ message: 'Ok', payload: updatedUser });
    } catch (error) {
      next(error);
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const { decoded } = req;
      const deletedUser = await UserService.deleteOneById(decoded.id);
      res.status(200).json({ message: 'Deleted user', payload: deletedUser });
    } catch (error) {
      next(error);
    }
  },
};
