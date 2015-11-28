/**
  a simple api for mysql
*/

var mysql = require('mysql');
var util =  require('util');

function dbClient(cb){
    var conn = mysql.createConnection(
	{
	    host:'127.0.0.1',
	    user:'root',
	    password:'',
	    database:'test',
	    port:'3306'
	}
    );

    if(typeof(cb) == 'function'){
	conn.connect();
	cb(conn);
	conn.end();
    }
}

function query(sql, cb){
    console.log(['Execute sql:',sql].join(""));
    dbClient(function(connection){
	connection.query(sql,function(err, rows, fields){
	    if(err){
		console.log('[ERROR:]' + err);
	    }
	    else{
		console.log("DB RESULT:" + util.inspect(rows));
		cb(rows);
	    }
	});
    });
}

exports.dbClient = dbClient;
exports.query = query;
