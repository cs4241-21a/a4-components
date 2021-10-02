const express  = require( 'express' ),
    app      = express();

const todos = [
    { name:'buy groceries', completed:false }
]

const appdata = [
    {'yourname': 'Greg', 'score': 745, 'rank': 1},
    {'yourname': 'Mark', 'score': 687, 'rank': 2},
    {'yourname': 'Liam', 'score': 430, 'rank': 3}
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
    const idx = todos.findIndex( v => v.name === req.body.name )
    todos[ idx ].completed = req.body.completed

    res.sendStatus( 200 )
})

app.listen( 8080 )
