import Joi from 'joi';

export default Joi.object({
  userId: Joi.string()
    .required()
    .min(2)
    .messages({
      'any.required': '400|UserId is required',
      'string.base': '422|UserId must be a string',
      'string.min': '422|UserId must be longer than 2 characters',
    }),
  products: Joi.array()
    .required()
    .messages({
      'any.required': '400|Products is required',
      'arrayarray.base': '422|Products must be a string',
    }),
});