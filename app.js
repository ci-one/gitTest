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

app.post('/noticeList', board.noticeList);
app.post('/noticeDelete', board.noticeDelete);
app.post('/noticeDeleteF', board.noticeDeleteF);
app.post('/noticeInsert', board.noticeInsert);
app.post('/noticeInsertF', board.noticeInsertF);
app.post('/noticeOne', board.noticeOne);
app.post('/noticeUpdate', board.noticeUpdate);


app.post('/nitemList', board.nitemList);
app.post('/nitemListall', board.nitemListAll);
app.post('/nitemOne', board.nitemOne);
app.post('/nmodelList', board.nmodelList);
app.post('/nitemInsert', board.nitemInsert);
app.post('/nitemOneFor', board.nitemOnefor);
app.post('/nitemInsertF', board.nitemInsertF);
app.post('/nmodelInsert', board.nmodelInsert);
app.post('/nitemDeleteF', board.nitemDeleteF);
app.post('/nitemDelete', board.nitemDelete);
app.post('/nmodelDelete', board.nmodelDelete);


app.post('/oitemList', board.oitemList);
app.post('/oitemListall', board.oitemListAll);
app.post('/oitemOne', board.oitemOne);
app.post('/omodelList', board.omodelList);
app.post('/oitemInsert', board.oitemInsert);
app.post('/oitemOneFor', board.oitemOneFor);
app.post('/oitemInsertF', board.oitemInsertF);
app.post('/omodelInsert', board.omodelInsert);
app.post('/oitemDeleteF', board.oitemDeleteF);
app.post('/oitemDelete', board.oitemDelete);
app.post('/omodelDelete', board.omodelDelete);


app.post('/mcqList', board.mcqList);
app.post('/mcqOne', board.mcqOne);
app.post('/mcqInsertF', board.mcqInsertF);
app.post('/mcqInsert', board.mcqInsert);


app.post('/lsqList', board.lsqList);
app.post('/lsqOne', board.lsqOne);
app.post('/lsqInsert', board.lsqInsert);
app.post('/lsqInsertF', board.lsqInsertF);


app.post('/customerList', board.customerList);
app.post('/customerOne', board.customerOne);
app.post('/customerdelete', board.customerdelete);
app.post('/customerInsert', board.customerInsert);

app.post('/idChk', board.idChk);

app.post('/oldRecList', board.oldRecList);
app.post('/oldRecUpdate', board.oldRecUpdate);
app.post('/oldRecDelete', board.oldRecDelete);
app.post('/oitemChk', board.oldRecChk);

app.post('/newRecList', board.newRecList);
app.post('/newRecUpdate', board.newRecUpdate);
app.post('/newRecDelete', board.newRecDelete);

/*app.route('/lease')
    .get(index.lease);*/
app.get('/',routes.index);
app.get('/lease',routes.lease);

app.get('/api/awesomeThings',api.awesomeThings);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
