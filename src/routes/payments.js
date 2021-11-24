const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const user = require('../middlewares/user');

router.get('', auth, user, (req, res) => {
  return res.render('payments');
});

module.exports = router;