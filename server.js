// const express  = require( 'express' ),
//       app      = express()

// const todos = [
//   { name:'buy groceries', completed:false }
// ]

// app.use( express.json() )

// // this will most likely be 'build' or 'public'
// app.use( express.static( 'build' ) )

// app.get( '/read', ( req, res ) => res.json( todos ) )

// app.post( '/add', ( req,res ) => {
//   todos.push( req.body )
//   res.json( todos )
// })

// app.post( '/change', function( req,res ) {
//   const idx = todos.findIndex( v => v.name === req.body.name )
//   todos[ idx ].completed = req.body.completed
  
//   res.sendStatus( 200 )
// })

// app.listen( 8080 )


const
      env = require('dotenv').config(),
      // IMPORTANT: you must run `npm install` in the directory for this assignment
      // to install the mime library used in the following line of code
      dir = 'public/',
      express = require('express'),
      bodyparser = require( 'body-parser' ),
      cookie  = require( 'cookie-session' ),
      db = require('mongodb'),
      app = express()

const session = require('express-session')



app.use( express.static('build') )
//app.use( bodyparser.json())
app.use(express.json())
//app.use(express.urlencoded({extended:false}))
// cookie middleware! The keys are used for encryption and should be
// changed
app.use(bodyparser.urlencoded({ extended: false }));

let records = [
  { entertainment: 10, food: 25, other: 23, total: 58, date: '2021-08-25'},
  { entertainment: 5,  food: 30, other: 30, total: 65, date: '2021-08-28' },
  { entertainment: 30, food: 30, other: 0,  total: 60, date: '2021-09-01'}
]



//route to get all docs
app.get( '/',  (req,res) => {
    // get array and pass to res.json
    res.sendFile( __dirname + '/build/data.html' )
    //collection.find({ }).toArray().then( result => res.json( result ) )
})


app.get('/load',(req, res) => {
    res.writeHead( 200, "OK", {'Content-Type': 'application/json' })
    res.end(JSON.stringify(records))
})

app.post('/add',(req, res) => {
  const record = req.body
  record.total = record.entertainment + record.food + record.other
  record.date = new Date().toISOString().slice(0,10)
  console.log('here',record)
  records.push(record)
  res.json( records )

})

app.post('/delete',(req, res) => {
  const record = req.body
  const checked = record.checked
  for (let i = 0; i < checked.length; i++) {
    records.splice(checked[i],1)
  }
  res.json(records)

})

app.post('/edit',(req, res) => {
  const edited = req.body
  console.log(edited)
  const total = edited.entertainments + edited.foods + edited.others
  const obj = records[edited.index]
  obj.entertainment=edited.entertainments
  obj.food=edited.foods
  obj.other=edited.others
  obj.total=edited.entertainments + edited.foods + edited.others
  res.json(records)

})


app.listen(process.env.PORT)
