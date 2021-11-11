const express = require('express');
const routes = express.Router();

const home = require('./home');
const app = require('./app');
const signup = require('./signup');

routes.use('/', home);
routes.use('/app', app);
routes.use('/signup', signup);

module.exports = routes;