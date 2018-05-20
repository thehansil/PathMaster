const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;



app.get('/api/v1/getit', (req,res) => 
  MongoClient.connect('mongodb://localhost:27017', function (err, db) {
    if (err) throw err;
    var dbo = db.db('test');
    dbo.collection('movie').findOne({name: 'jacob'},(function (err, result) {
      if (err) throw err;

      console.log(result.name);
      res.send(result.name);
      db.close();
    }));
  })
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));