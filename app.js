/**
  the entrance of app
*/

/*-------------require modules------------------*/
require('./global');

var app = require('express')(),
    bodyParser = require('body-parser'),
    http = require('http');


/*-------------regist routes-------------------*/
app.use('/api',Routes.api.index);

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
    




