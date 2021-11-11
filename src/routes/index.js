const express = require('express');
const routes = express.Router();

const home = require('./home');

routes.use('/', home);

module.exports = routes