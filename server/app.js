const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');

const app = express();

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  var cors = require('cors');
  require('dotenv').config();
  app.use(cors());
  console.log('cors enabled');
}
require('./passport-setup');

const MONGODB = process.env.MONGODB;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build')));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ errors: { error: '404 not found' } });
});

// Connect to mongodb
// mongoose.set('useCreateIndex', true);
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.error(err);
  });


module.exports = app;
