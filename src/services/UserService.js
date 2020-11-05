const { User } = require('../models/index.js');

module.exports = {
  create: (body) => new User(body).save(),
  findOne: (id) => User.findById(id),
  findOneByEmail: (email) => User.findOne({ email }),
  updateOne: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  deleteOneById: (id) => User.findByIdAndDelete(id),
};
