const express = require('express');
const router = express.Router();

const logged = require('../middlewares/logged');

router.get('', logged, (req, res) => {
  return res.render('login');
});

module.exports = router;
