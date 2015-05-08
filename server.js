// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./app/config/config')[env];

app.set('views', config.rootPath + '/app/partials');
//app.set('view engine', 'jade');

//get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json

app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

app.use(express.static(__dirname + '/app/public')); // set the static files location /public/img will be /img for users
// routes ==================================================
require('./app/config/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(config.port);

console.log('Server starts on port ' + config.port + ' ...'); // shoutout to the user

// modules =================================================
