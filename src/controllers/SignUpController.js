const axios = require('axios');

module.exports = {
  get(req, res) {
    const { email } = req.query ? req.query : '';

    return res.render('signup', { email });
  },

  async post(req, res) {
    const { username, email, password, avatar } = req.body;

    const user = {
      username,
      email,
      password,
      avatar,
    };

    const { data, status } = await axios.post('http://localhost:3030/users', user);

    return res.status(status).send(data);
  },
};