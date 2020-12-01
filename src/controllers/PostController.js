const { PostService } = require('../services/index.js');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { body } = req;
      const post = await PostService.create(body);
      res.status(200).json({ message: 'Ok', payload: post });
    } catch (error) {
      next(error);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { params } = req;
      console.log(params.id);
      const post = await PostService.findOne(params.id);
      res.status(200).json({ message: 'Ok', payload: post });
    } catch (error) {
      console.log('no');
      next(error.message);
    }
  },
};
