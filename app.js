var createError = require('http-errors');
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser'); 
require("dotenv").config();

var app = express();

var todos = require('./routes/todos');
var users = require('./routes/users');

// view engine setup
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
  res.locals.user = "dd";
  next();
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log("index main");
  const title = "hello world";
  res.render('index', {
  });
});

app.use('/todos', todos);
app.use('/users', users);

module.exports = app;
