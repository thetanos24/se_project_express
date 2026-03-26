const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

const validateClothingItem = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "any.required": 'The "name" field is required',
    }),
    weather: Joi.string().required().valid("hot", "warm", "cold"),
    imageUrl: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'The "imageUrl" field must be a valid url',
      "any.required": 'The "imageUrl" field is required',
    }),
  }),
});

const validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
    }),
    avatar: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid url',
      "any.required": 'The "avatar" field is required',
    }),
    email: Joi.string().required().email().messages({
      "any.required": 'The "email" field is required',
      "string.email": 'The "email" field must be a valid email',
    }),
    password: Joi.string().required().messages({
      "any.required": 'The "password" field is required',
    }),
  }),
});

const validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "any.required": 'The "email" field is required',
      "string.email": 'The "email" field must be a valid email',
    }),
    password: Joi.string().required().messages({
      "any.required": 'The "password" field is required',
    }),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().hex().length(24).messages({
      "string.hex": 'The "itemId" must be a hexadecimal value',
      "string.length": 'The "itemId" must be 24 characters long',
    }),
    userId: Joi.string().hex().length(24).messages({
      "string.hex": 'The "userId" must be a hexadecimal value',
      "string.length": 'The "userId" must be 24 characters long',
    }),
  }),
});

module.exports = {
  validateClothingItem,
  validateUserBody,
  validateAuthentication,
  validateId,
};
