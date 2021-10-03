const express  = require( 'express' ),
    app      = express()

let today = new Date().toLocaleDateString()
let deadline = new Date(today)
deadline.setDate(deadline.getDate() + 7);

const appdata = [
    { list_entry : "banana", quantity : "5", urgency : false, creation_date: today, deadline: deadline.toLocaleDateString() }
]

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( appdata ) )

app.post( '/add', ( req,res ) => {
    appdata.push( req.body )
    res.json( appdata )
})

app.post( '/change', function( req,res ) {
    const idx = appdata.findIndex( v => v.name === req.body.name )
    appdata[ idx ].completed = req.body.completed

    res.sendStatus( 200 )
})

app.listen( process.env.PORT || 3000  )