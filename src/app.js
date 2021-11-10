const express = require('express');
const app = express();
const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(routes);

module.exports = app;