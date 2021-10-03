const express  = require( 'express' ),
      app      = express()

const todos = [
  { yourname:'aName', birth:'2000', cur: '2021' }
]

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( todos ) )

app.post( '/add', ( req,res ) => {
  todos.push( req.body )
  res.json( todos )
})

// app.post( '/change', function( req,res ) {
//   const idx = todos.findIndex( v => v.yourname === req.body.yourname, x => x.birth === req.body.birth, y => y.cur === req.body.cur )
//   todos[ idx ].completed = req.body.completed
  
//   res.sendStatus( 200 )
// })

app.listen( 8085 )