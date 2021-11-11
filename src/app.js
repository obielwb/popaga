const express = require('express');
const app = express();
const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use('/images', express.static('./public/images'));
app.use('/css', express.static('./public/styles/css'));

app.use(routes);

module.exports = app;