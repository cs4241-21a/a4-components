const express  = require( 'express' ),
    app = express()

const appdata = []

app.use( express.json() )
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( appdata ) )

app.post( '/add', ( req,res ) => {
    req.body.tcal = req.body.cal * req.body.serv
    appdata.push( req.body )
    res.json( appdata )
})

app.post( '/update', function( req,res ) {
  appdata[ req.body.id ].fname = req.body.fname
  appdata[ req.body.id ].cal = req.body.cal
  appdata[ req.body.id ].serv = req.body.serv
  appdata[ req.body.id ].tcal = req.body.cal * req.body.serv
  
  res.json( appdata )
})

app.post( '/delete', function( req,res ) {
  appdata.splice(req.body.id, 1)    
    res.json( appdata )
  })

app.listen( process.env.PORT || 3000 )