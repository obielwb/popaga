const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  const { email } = req.query ? req.query : "";

  return res.render('signup', { email });
});

module.exports = router;