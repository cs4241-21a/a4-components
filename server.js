const express  = require( 'express' )
const bodyParser = require('body-parser') // body-parser is a middle-ware
const mongodb = require('mongodb');
const app = express()

// use express.urlencoded to get data sent by default form actions
// or GET requests
app.use( express.urlencoded({ extended:true }) )



const uri = "mongodb+srv://CS4241:CS4241DatabasePassword@tipcalculator.wbgat.mongodb.net/TipCalculator?retryWrites=true&w=majority";

const client = new mongodb.MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology:true })
let receipt_collection = null


client.connect()
  .then( () => {
    // will only create collection if it doesn't exist
    return client.db( 'a4-db' ).collection( 'saved_receipts' )
  })
  .then( __collection => {
    
    receipt_collection = __collection

  })



app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.post("/get_receipts", bodyParser.json(), (request, response) => {

    // console.log("Printing receipts")
    receipt_collection.find().toArray()
        .then( dbJSON => response.json(dbJSON));
})


app.post("/add", bodyParser.json(), (request, response) => {

    // curl --request "POST" "127.0.0.1:5500/add" -d '{ "num_of_people": "2", "amount_due": "$23", "tip":"$23.00"}' -H "Content-Type: application/json"

    const json = request.body;

    // console.log("given request: ", request)
    // console.log("given json: ", json)
    // console.log("json.num_of_people: ", json.num_of_people)
    // console.log("json.amount_due: ", json.amount_due)
    // console.log("json.tip.replace: ", json.tip)

    let num_of_people = parseFloat(json.num_of_people);
    let amount_due = parseFloat(json.amount_due.replace("$","").replace(",", ""));
    let tip = parseFloat(json.tip.replace("$","").replace(",", ""));


    let price_per_person = (amount_due + tip) / num_of_people;
    json['price_per_person'] = "$" + price_per_person.toFixed(2).toString();

    // console.log("inserting json: ", json)

    receipt_collection.insertOne(json)
        .then( result => response.json(result) )
})


app.post("/find_receipt", bodyParser.json(), (request, response) => {
    receipt_collection.find({_id:mongodb.ObjectID(request.body.id)}).toArray()
        .then( dbJSON => response.json(dbJSON));
})

app.post('/delete_receipt', bodyParser.json(), (request, response) =>
    receipt_collection  
        .deleteOne({_id:mongodb.ObjectID(request.body.id)})
        .then( result => response.json(result))
)



app.listen(3000)