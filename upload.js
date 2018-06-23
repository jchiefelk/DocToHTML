var mammoth = require('mammoth');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var html = null;

mammoth.convertToHtml({path: "TheSagaOfRedHorn.docx"})
		.then(function(result){
			html = result.value; // The generated HTML
			// console.log(html);
			var messages = result.messages; // Any messages, such as warnings
		})
		.then(()=>{
				MongoClient.connect(url, function(err, db) {
				  if (err) throw err;
				  var dbo = db.db("articles");
				  var myobj = [
				    { firstname: 'Jackson', lastname: 'Chief Elk', title: '', article: html}
				  ];
				  dbo.collection("history").insertMany(myobj, function(err, res) {
				    if (err) throw err;
				    console.log("Number of documents inserted: " + res.insertedCount);
				    db.close();
				  });
				});
		})
		.done();