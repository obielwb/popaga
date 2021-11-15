const { verify } = require('jsonwebtoken');

const config = require('../config/auth');

module.exports = (req, res, next) => {
  const session = req.cookies.session;

  if (!session) return res.redirect('/login');

  verify(session, config.secret, (error, decoded) => {
    if (error) return res.redirect('/login');
    return next();
  });
};
