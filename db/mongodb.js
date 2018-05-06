var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/pathmaster';

MongoClient.connect(url, function (err,db) {
    if (err) throw err;
    var dbo = db.db("Pathmaster")
    var myobj = { name: "Lance Kaijitsu", class: "Tripper" };
    dbo.collection("pcs").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
  });
});