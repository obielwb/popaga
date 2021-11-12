const express = require('express');
const router = express.Router();

router.get('', async (req, res) => {
  const { username, email, password, avatar } = req.query ? req.query : '';

  // if ((username != '' && password != '') || avatar != '')
    // return res.render('signup', { email: '' });

  return res.render('signup', { email });
});

module.exports = router;