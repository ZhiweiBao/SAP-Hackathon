var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var badgesRouter = require('./routes/badges');
var challengesRouter = require('./routes/challenges');
var eventsRouter = require('./routes/events');

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const dbUrl = process.env.URI;
console.log("DBURL: ", dbUrl);
mongoose.connect(dbUrl, {
  // useNewUrlParser: true,
  //useCreateIndex: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("SAP HACK Database connected");
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.user(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/badges', badgesRouter);
app.use('/challenges', challengesRouter);
app.use('/events', eventsRouter);

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
  res.render('error');
});


module.exports = app;
