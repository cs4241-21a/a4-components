const express  = require( 'express' ),
      app      = express(),
      cors = require('cors')

const entries = [
  {name:'jeff', feet:5, inches:10, weight:150, bmi:25, status:'Healthy'}
]

app.use( express.json() )
app.use(cors())



// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )


app.get( '/read', ( req, res ) => res.json( entries ) )

app.post( '/add', ( req,res ) => {
  entries.push( req.body )
  res.json( entries )
})

app.post( '/change', function( req,res ) {
  const idx = req.body.index
  console.log(req.body)
  entries[idx].name = req.body.name
  entries[ idx ].feet = req.body.feet
  entries[idx].inches = req.body.inches
  entries[idx].weight = req.body.weight
  entries[idx].bmi = req.body.bmi
  entries[idx].status = req.body.status

  
  res.sendStatus( 200 )
})

app.post('/delete', function(req, res){
  const idx =  entries.findIndex( v => v.name === req.body.name )
 // console.log(entries[idx])
  entries.splice(idx, 1)
  //console.log(entries)
})

app.listen( process.env.PORT || 8080 )