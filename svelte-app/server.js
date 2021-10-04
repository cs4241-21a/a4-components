const express  = require( 'express' ),
      app      = express()

const entries = [
  { name: "Adam", age: 22, score: 100, pro: "", completed: false }
]

app.use( express.json() )
app.use( express.static( 'public' ) )

app.get( '/read', ( req, res ) => res.json( entries ) )

app.post( '/add', ( req,res ) => {
  entries.push( req.body )
  res.json( entries )
})

app.post( '/change', function( req,res ) {
  const idx = entries.findIndex( v => v.name === req.body.name )
  entries[ idx ].completed = req.body.completed
  
  res.sendStatus( 200 )
})

app.listen( 8080 )