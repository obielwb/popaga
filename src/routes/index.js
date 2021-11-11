const express = require('express');
const routes = express.Router();

const home = require('./home');
const app = require('./app');

routes.use('/', home);
routes.use('/app', app);

module.exports = routes;