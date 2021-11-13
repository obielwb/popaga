const axios = require('axios');

module.exports = {
  get(req, res) {
    return res.render('login');
  },
  
  async post(req, res) {
    const { email, password } = req.body;

    return res.send('login');
  },
};