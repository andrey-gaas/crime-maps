const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).send('Token not provided!');
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    jwt.verify(token, config.get('jwt'));
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).send('Invalid token!');
    }
  }

  next();
};