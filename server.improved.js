const express  = require( 'express' ),
      app      = express()

const books = [
  { title:'Romeo and Juliet', author: 'Shakespeare', score: 2, notes: 'example', year: 2021 }
]

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( books ) )

app.post( '/add', ( req,res ) => {
  req.body.year = new Date().getFullYear();
  books.push(req.body)
  res.json( books )
})


app.listen( process.env.PORT || 8080)
