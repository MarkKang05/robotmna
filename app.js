const createError = require('http-errors');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser'); 
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
const mongoose = require('mongoose');
const passport = require('passport');
const Handlebars = require('handlebars');
const {ensureAuthenticated} = require('./helpers/auth');
const methodOverride = require('method-override')


require("dotenv").config();

var todos = require('./routes/todos');
var users = require('./routes/users');
var upload = require('./routes/upload');

require('./config/passport')(passport);

mongoose.connect(process.env.DB_ADR).then(() => {
  console.log("MongoDB connected...");
}).catch(err => {
  console.log("#################### Error ####################");
});
// const conn = mongoose.createConnection(process.env.DB_ADR);
const conn = mongoose.connection;


var app = express(); 

// view engine setup
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'))
app.use(session({

  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// upload image//////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////



app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // console.log("index main");
  const title = "hello world";
  if (req.user == null){
      res.render('index', {
        name: null,
        home: '/'
    });
  }
  else{
      console.log(res.locals.user)
      res.render('index', {
        home: '/'
        // name: req.user.name
    });
  }
});

app.use('/todos', todos);
app.use('/users', users);
app.use('/upload', upload);

module.exports = app;
