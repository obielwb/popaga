const { verify } = require('jsonwebtoken');
const axios = require('axios');

const config = require('../config/auth');
const { response } = require('express');

module.exports = (req, res, next) => {
  const session = req.cookies.session;

  if (!session) {
    res.locals.user = null;
    return next();
  }

  verify(session, config.secret, (error, decoded) => {
    if (error) {
      res.locals.user = null;
      return next();
    }

    const config = {
      headers: {
        Authorization: `Bearer ${session}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
    };

    axios
      .get(
        `https://ojpbarbosa-cors-everywhere.herokuapp.com/https://popaga-api.herokuapp.com/users/${decoded.id}`,
        config
      )
      .then((response) => {
        const { data, status } = response;

        if (status === 200) res.locals.user = data;
        else res.locals.user = null;

        return next();
      });
  });
};
