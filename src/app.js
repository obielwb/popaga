// TODOS:
//  - handle the image blob response
//  - make login and sign up pages responsive
//  - make the home page look better
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const routes = require('./routes');

app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/favicon', express.static('./public/favicon'));
app.use('/css', express.static('./public/styles/css'));

app.use(routes);

module.exports = app;
