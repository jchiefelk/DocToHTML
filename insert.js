var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
// Insert Data
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("articles");
  var myobj = [
    { firstname: 'John', lastname: 'Sally', title: 'I rode the bench', article: '<p></p>'},
    { firstname: 'John', lastname: 'Sally', title: 'I rode the bench', article: '<p></p>'}
  ];
  dbo.collection("science").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});