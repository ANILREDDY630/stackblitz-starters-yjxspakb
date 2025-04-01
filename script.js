require('dotenv').config();
const jwt = require('jsonwebtoken');

const encrypt = (payload, secret, expiresIn = '1d') => {
  // your code here and return token
  return jwt.sign(payload, secret, { expiresIn });

};

module.exports = encrypt;
