const jwt = require('jsonwebtoken');
const { secret } = require('./config');

module.exports = {
  sign: (payload) => jwt.sign(payload, secret, { expiresIn: '3h' }),
  verify: (token) => jwt.verify(token, secret)
};
