const express = require('express');
const routes = express.Router();

const home = require('./home');
const app = require('./app');
const signup = require('./signup');
const login = require('./login');

routes.use('/', home);
routes.use('/app', app);
routes.use('/signup', signup);
routes.use('/login', login);

module.exports = routes;