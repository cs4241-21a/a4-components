const express  = require( 'express' ),
      app      = express()

const todos = []

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( todos ) )

app.post( '/add', ( req,res ) => {
  todos.push( req.body )
  console.log(req.body)
  todos.forEach(element => timeUntilDue(element))
  res.json( todos )
})

app.post( '/change', function( req,res ) {
  const idx = todos.findIndex( v => v.descrip === req.body.oldDesc )
  todos[ idx ].descrip = req.body.descrip
  todos[ idx ].expectedTime = req.body.expectedTime
  todos[ idx ].dueDate = req.body.dueDate

  
  todos.forEach(element => timeUntilDue(element))
  res.json( todos )
  res.sendStatus( 200 )
})

app.post('/delete', function( req,res) {
    const idx = todos.findIndex( v => v.descrip === req.body.descrip )
    todos.splice(idx, 1)

  
  todos.forEach(element => timeUntilDue(element))
  res.json( todos )
  res.sendStatus( 200 )
})

const timeUntilDue = function(data){
    let start = new Date(),
            year = start.getFullYear(),
            month = start.getMonth() + 1,
            date = start.getDate(),
            hour = start.getHours(),
            minute = start.getMinutes(),
            dueYear = parseInt(data.dueDate.slice(0, 4)),
            dueMonth = parseInt(data.dueDate.slice(5, 7)),
            dueDay = parseInt(data.dueDate.slice(8, 10)),
            dueHour = parseInt(data.dueDate.slice(11, 13)),
            dueMinute = parseInt(data.dueDate.slice(14, 16))
  
  
    let timeLeft = (((((dueYear - year) * 12 +  dueMonth - month) * 30 + dueDay - date) * 24 + dueHour - hour) * 60 + dueMinute - minute)
    
    if(timeLeft < 0){
      data.DueDate = "Overdue!"
    } else {
  
        let minutesLeft = timeLeft % 60,
            hoursLeft = Math.floor(timeLeft / 60) % 24,
            daysLeft = Math.floor(timeLeft / 60 / 24) % 30,
            monthsLeft = Math.floor(timeLeft / 60 / 24 / 30) % 12,
            yearsLeft =  Math.floor(timeLeft / 60 / 24 / 30 / 12),
            dueString = "Due in "
  
        dueString += yearsLeft > 0 ? yearsLeft + " years " : ""
        dueString += monthsLeft > 0 ? monthsLeft + " months " : ""
        dueString += daysLeft > 0 ? daysLeft + " days " : ""
        dueString += hoursLeft > 0 ? hoursLeft + " hours " : ""
        dueString += minutesLeft > 0 ? minutesLeft + " minutes" : ""
  
        
      data.DueDate = dueString
    }
    
  }
  

app.listen( 8080 )