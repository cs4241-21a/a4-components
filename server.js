const express  = require( 'express' ),
      app      = express()

let pizzaOrders = [
  { totP:20, slicesPer:1, gfP:0, large:2, medium:0, small:0, largeGf:0, mediumGf:0, smallGf:0 }
]

app.use( express.json() )
app.use( express.static( 'public' ) )

app.get( '/read', ( req, res ) => res.json( pizzaOrders ) )

app.post( '/add', ( req,res ) => {
  pizzaOrders.push( req.body )
  res.json( pizzaOrders )
})

app.listen( 8080 )