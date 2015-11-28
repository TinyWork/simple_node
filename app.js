/**
  the entrance of app
*/

/*-------------require modules------------------*/
require('./global');

var app = require('express')(),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    http = require('http');

app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

/*-------------regist routes-------------------*/
app.use('/api',Routes.api.index);
app.get('/upload_html',function(req,res){
    res.render('upload',{title:"upload"});

});
app.use('/',function(req,res,next){
    res.status(200).send('Welcome!Server is Running...');

});

// handle 404 error request
app.use(function(req, res, next){
    res.status(404).send('Page not found!');

})

// handle all uncaught exception
process.on('uncaughtException', function(err) {
    console.error('UNCAUGHT EXCEPTION');
    console.error('stack', err.stack);
})

/*-------------start server---------------------*/
	
http.createServer(app).listen(8000,function(){
    console.log(["Server is running on port:",8000].join(""));
})
    




