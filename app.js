/**
 * Created by adithep on 10/17/2017 AD.
 */


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var routes = require('./routes/site_route');
var errorHandler = require('./_helpers/error-handler');
//var login_route = require('./routes/login_route');
//var staff_route = require('./routes/staff_route');
//var car_route   =require('./routes/car_route');
//var Students=require('./routes/Students');


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cors());

//app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

//app.use('/Staff',staff_route);
//app.use('/Car',car_route);

app.use(errorHandler);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;