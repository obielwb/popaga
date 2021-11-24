const { verify } = require('jsonwebtoken');
const axios = require('axios');

const config = require('../config/auth');

module.exports = (req, res, next) => {
  const session = req.cookies.session;

  if (!session) return res.redirect('/login');

  verify(session, config.secret, (error, decoded) => {
    if (error) {
      res.cookie('session', '', { maxAge: 0 });
      return res.redirect('/login');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    };

    axios
      .get(`http://localhost:3030/users/${decoded.id}`, config)
      .then((response) => {
        if (response.data) {
          const { data } = response;

          res.locals.user = data;

          return next();
        } else {
          res.cookie('session', '', { maxAge: 0 });
          return res.redirect('/login');
        }
      })
      .catch(() => {
        res.cookie('session', '', { maxAge: 0 });
        return res.redirect('/login');
      });
  });
};
