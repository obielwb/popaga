const express = require('express');
const router = express.Router();

const logged = require('../middlewares/logged');

router.get('', logged, (req, res) => {
  const { email } = req.query ? req.query : '';

  return res.render('signup', { email });
});

module.exports = router;
