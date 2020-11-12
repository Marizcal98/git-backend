const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi
      .object()
      .keys({
        img_url: Joi.string(),
        author: Joi.string().required(),
        description: Joi.string().required(),
      }),
  }),
};
