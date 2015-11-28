/**
    index api design
*/

var express = require('express')
var router = express.Router();
var db = require('../..//db/database');

router.get('/login', function(req,res){
    db.query('select * from test1',function(result){
	console.log("dbquery:"+(result));
	res.status(200).send('Welcome here!');    
});
    //res.status(200).send('Welcome here!');

});

module.exports = router
