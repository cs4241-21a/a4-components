const express  = require( 'express' ),
      app      = express()

const appdata = []

app.use( express.json() )
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( appdata ) )

app.post( '/add', ( req,res ) => {
    let entry = req.body

    //adds expected delivery time
    let dTime = "unknown";
    const d = new Date();
    let hours;
    let minutes;
    if(entry.distance === "Not Far"){
      if(d.getHours() > 12){
        hours = d.getHours() - 16;
      }
      else{
        hours = d.getHours() - 4;
      }

      if(d.getMinutes() + 10 > 60){
        if(hours === 12){
          hours = 0
        }
        hours = hours + 1;
        minutes = d.getMinutes() + 10 - 60;
      }
      else{
        minutes = d.getMinutes() + 10;
      }
    }
    if(entry.distance === "Decently Far"){
      if(d.getHours() > 12){
        hours = d.getHours() - 16;
      }
      else{
        hours = d.getHours() - 4;
      }

      if(d.getMinutes() + 25 > 60){
        if(hours === 12){
          hours = 0
        }
        hours = hours + 1;
        minutes = d.getMinutes() + 25 - 60;
      }
      else{
        minutes = d.getMinutes() + 25;
      }
    }
    if(entry.distance === "Far"){
      if(d.getHours() > 12){
        hours = d.getHours() - 16;
      }
      else{
        hours = d.getHours() - 4;
      }

      if(d.getMinutes() + 40 > 60){
        if(hours === 12){
          hours = 0
        }
        hours = hours + 1;
        minutes = d.getMinutes() + 40 - 60;
      }
      else{
        minutes = d.getMinutes() + 40;
      }
      
    }
    if(minutes < 10){
      dTime = hours + ":0" + minutes
    }
    else{
      dTime = hours + ":" + minutes
    }

    if(d.getHours() > 12){
      timePlaced = (d.getHours() - 16) + ":" + d.getMinutes(); 
    }
    else{
      timePlaced = (d.getHours() - 4) + ":" + d.getMinutes(); 
    }

    entry.time = timePlaced;
    entry.dropTime = dTime;
    console.log(entry);

  appdata.push(entry)
  console.log(appdata)
  res.json(appdata)
})

app.post( '/update', function( req,res ) {

})

app.post( '/remove', function( req,res ){
    appdata.splice(req.body.i, 1)
    res.json(appdata)
})

app.listen( 3000 )