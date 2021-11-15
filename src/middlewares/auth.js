const { verify } = require('jsonwebtoken');

const config = require('../config/auth');

module.exports = (req, res, next) => {
  const session = req.cookies.session;

  if (session) {
    verify(session, config.secret, (error, decoded) => {
      if (error) res.redirect('/login');
      else next();
    });
  } else {
    res.redirect('/login');
  }
};
