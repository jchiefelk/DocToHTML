const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
// Required for POST Requests
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// Set Port
app.set('port',(process.env.PORT || 3000));
app.get('/history',function(req,res){
	MongoClient.connect(url,function(err,db){
		  if (err) throw err;
		  var dbo = db.db("articles");
		  dbo.collection("history").findOne({}, function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    res.json({result: result});
		    db.close();
		  });
	});
});

app.listen(app.get('port'), ()=>{
	console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});