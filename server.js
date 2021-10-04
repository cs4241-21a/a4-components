const express  = require( 'express' ),
    app      = express()

const todos = [
    { name:'buy groceries', completed:false }
]

const appdata = [
    // { name: 'Jane Doe', color: '#ff55ff', message: 'Sometimes all you need is a little splash of color1' },
    // { name: 'Jane Doe', color: '#ffff55', message: 'Sometimes all you need is a little splash of color2' },
    // { name: 'Jane Doe', color: '#55ffff', message: 'Sometimes all you need is a little splash of color3' }
]

app.use( express.json() )

console.log("Setting up request logger")
const requestLogs = function(req, res, next){
    console.log(req.url)
    next()
}
app.use(requestLogs)

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )


app.get( '/messages', ( req, res ) => {
    res.json( appdata )
} )

app.post( '/submit', (req, res) => {
    const json = req.body
    console.log("Received datastring to /submit: " + JSON.stringify(json))

    //Derived field
    json.message = json.name + " says \"" + json.message + "\""

    appdata.push(json)
    console.log("Sending: \n" + JSON.stringify(appdata))
    res.json(appdata)
})


// Examples
// app.get( '/read', ( req, res ) => res.json( todos ) )
//
// app.post( '/add', ( req,res ) => {
//     todos.push( req.body )
//     res.json( todos )
// })
//
// app.post( '/change', function( req,res ) {
//     const idx = todos.findIndex( v => v.name === req.body.name )
//     todos[ idx ].completed = req.body.completed
//
//     res.sendStatus( 200 )
// })
// End Examples

app.listen( 3003 )