// TODOS:
//  - update login/sign up pages
//  - handle the image blob response
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
app.use('/icons', express.static('./public/icons'));
app.use('/css', express.static('./public/styles/css'));

app.use(routes);

module.exports = app;
