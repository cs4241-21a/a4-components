const express = require('express');
const app = express();
const port = 5000;
const mongodb = require('mongodb');
const bodyparser = require('body-parser');
var cors = require("cors");

app.use(cors());

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

// app.listen(3000);

// for testing
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
}); 

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://YangLyu:fpxdoinbN2@cluster0.hug98.mongodb.net/datatest?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let collection1 = null;
let database = null;

client.connect(err => {
  database = client.db("datatest");
  collection1 = database.collection("a4Data");
});

app.post('/add', bodyparser.json(), function(req, res) {
  // print the data that will be added into the database
  console.log(req.body);
  collection1.insertOne( req.body )
  .then( dbresponse => {
    res.json( {result:"Add in data success!"} )
  })
})

