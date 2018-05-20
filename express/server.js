const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;



app.get('/api/v1/getit', (req,res) => 
  MongoClient.connect('mongodb+srv://jhansil:pa77word@pathmaster-ac6vm.mongodb.net/test', function (err, db) {
    if (err) throw err;
    var dbo = db.db('test');
    dbo.collection('customers').findOne({name: 'Company Inc'},(function (err, result) {
      if (err) throw err;

      console.log(result.name);
      res.send(result.name);
      db.close();
    }));
  })
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));