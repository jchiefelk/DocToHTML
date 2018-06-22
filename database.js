var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//
// For a Single Lookup
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("articles");
  dbo.collection("finance").findOne({}, function(err, result) {
    if (err) throw err;
    // console.log(result);
    db.close();
  });
});
// To read the entire collection
//
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("articles");
  dbo.collection("finance").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});