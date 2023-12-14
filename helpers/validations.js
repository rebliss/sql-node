const Joi = require('joi');

const RoleSchema = Joi.object({
  name: Joi.string().min(1).required().messages({
    'string.base': 'Username must be a string',
    'string.empty': 'Username is required',
    'string.min': 'Username must be at least {#limit} characters long',
  }),

});

const UserSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': 'Username must be a string',
    'string.empty': 'Username is required',
    'string.min': 'Username must be at least {#limit} characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.empty': 'Email is required',
    'string.email': 'Invalid email format',
  }),
  phone:Joi.string().min(3).required().messages({
    'string.base': 'Phone must be a string',
    'string.empty': 'Phone is required',
    'string.email': 'Invalid email format',
  }),

});

module.exports = {RoleSchema ,UserSchema };