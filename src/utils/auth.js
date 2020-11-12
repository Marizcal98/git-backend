const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  comparePasswords: (password, hash) => compareSync(password, hash),
  // eslint-disable-next-line camelcase
  createToken: ({
    // eslint-disable-next-line camelcase
    id, email, first_name, profile_img,
  }) => {
    try {
      const payload = {
        id,
        email,
        first_name,
        profile_img,
      };
      const options = {
        expiresIn: '1hr',
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, options);
      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
