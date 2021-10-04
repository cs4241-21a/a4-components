const express  = require( 'express' ),
      app      = express()

let cars = []

app.use( express.json() )

app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( cars ) )

app.post( '/submit', ( req,res ) => {
  let year = req.body.year
  let d = new Date()
  let age = d.getFullYear() - year

  let formData = req.body
  formData.age = String(age);

  cars.push( formData )
  res.json( cars )
})

app.post( '/remove', function( req,res ) {
  cars = cars.filter( car => car.plateNum !== req.body.plateNum )
  res.json( cars )
})

app.listen( 8080 )