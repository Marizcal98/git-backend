const { Post } = require('../models/index.js');

module.exports = {
  create: (body) => new Post(body).save(),
  findOne: (id) => Post.findById(id),
};
