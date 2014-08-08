/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path') ////////////인입 for ym
    , multipart = require('connect-multiparty')
    , api = require('./routes/controllers/api')
    , board = require('./routes/controllers/boardDAO');

var app = express();

// all environments
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//////인입 for cione
app.use(multipart());

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/ym', routes.index);
app.get('/', routes.index);

app.get('/api/awesomeThings',api.awesomeThings);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});