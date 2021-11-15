const { verify } = require('jsonwebtoken');

const config = require('../config/auth');

module.exports = (req, res, next) => {
  const session = req.cookies.session;

  if (!session) return next();

  verify(session, config.secret, (error, decoded) => {
    if (error) return next();
    return res.redirect('/app');
  });
};
