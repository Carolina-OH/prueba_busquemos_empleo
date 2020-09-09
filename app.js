var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jobsRouter = require('./routes/jobs');

var app = express();
var mongoose = require("mongoose");
var mongoDB = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/prueba"
console.log("Conecting to database...");
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()) ;
app.use(express.static(path.join(__dirname, 'public')));
//bootstrap
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
//jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
//axios
app.use('/axios', express.static(__dirname + '/node_modules/axios/dist/'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jobs', jobsRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var port = process.env.PORT || 3000;
console.log("The magic happens on port " + port + " http://localhost:3000/");
module.exports = app;
