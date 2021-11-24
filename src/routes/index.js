const express = require('express');
const routes = express.Router();

const home = require('./home');
const app = require('./app');
const payments = require('./payments');
const signup = require('./signup');
const login = require('./login');

routes.use('/', home);
routes.use('/app', app);
routes.use('/payments', payments)
routes.use('/signup', signup);
routes.use('/login', login);

module.exports = routes;