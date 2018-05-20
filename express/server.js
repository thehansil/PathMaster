const settings = require('../config').settings;
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.get('/api/v1/getit', (req,res) => {
  MongoClient.connect(`mongodb+srv://${settings.username}:${settings.password}@pathmaster-ac6vm.mongodb.net/test`, (err, db) => {
    if (err) throw err;
    let dbo = db.db('test');
    dbo.collection('customers').findOne({name: 'Company Inc'}, (err, result) => {
      if (err) throw err;

      console.log(result.name);
      res.send(result.name);
      db.close();
    });
  });
});

app.get('/quit', function(req,res) {
  res.send('closing...');
  server.close();
});

let server = app.listen(3000, () => console.log('Example app listening on port 3000!'));