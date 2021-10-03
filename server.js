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
    let meridiem;
    let meridiem2;
    if(entry.distance === "Not Far"){
      if(d.getHours() > 15){
        hours = d.getHours() - 16;
        meridiem = "PM"
      }
      else{
        hours = d.getHours() - 4;
        meridiem = "AM"
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
      if(d.getHours() > 15){
        hours = d.getHours() - 16;
        meridiem = "PM"
      }
      else{
        hours = d.getHours() - 4;
        meridiem = "AM"
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
      if(d.getHours() > 15){
        hours = d.getHours() - 16;
        meridiem = "PM"
      }
      else{
        hours = d.getHours() - 4;
        meridiem = "AM"
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
      dTime = hours + ":0" + minutes + meridiem
    }
    else{
      dTime = hours + ":" + minutes + meridiem
    }

    if(d.getHours() > 15){
      meridiem2 = "PM"
      timePlaced = (d.getHours() - 16) + ":" + d.getMinutes() + meridiem2; 
    }
    else{
      meridiem2 = "AM"
      timePlaced = (d.getHours() - 4) + ":" + d.getMinutes() + meridiem2; 
    }

    entry.time = timePlaced;
    entry.dropTime = dTime;
    console.log(entry);

  appdata.push(entry)
  console.log(appdata)
  res.json(appdata)
})

app.post( '/update', function( req,res ) {
    appdata[req.body.i].yourname = req.body.yourname
    appdata[req.body.i].yourorder = req.body.yourorder
    appdata[req.body.i].distance = req.body.distance

    let entry = req.body

        //adds expected delivery time
        let dTime = "unknown";
        const d = new Date();
        let hours;
        let minutes;
        let meridiem;
        if(entry.distance === "Not Far"){
          if(d.getHours() > 15){
            hours = d.getHours() - 16;
            meridiem = "PM"
          }
          else{
            hours = d.getHours() - 4;
            meridiem = "AM"
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
          if(d.getHours() > 15){
            hours = d.getHours() - 16;
            meridiem = "PM"
          }
          else{
            hours = d.getHours() - 4;
            meridiem = "AM"
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
          if(d.getHours() > 15){
            hours = d.getHours() - 16;
            meridiem = "PM"
          }
          else{
            hours = d.getHours() - 4;
            meridiem = "AM"
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
          dTime = hours + ":0" + minutes + meridiem
        }
        else{
          dTime = hours + ":" + minutes + meridiem
        }
    
        entry.dropTime = dTime;
        appdata[req.body.i].dropTime = dTime;

    res.json(appdata)
})

app.post( '/remove', function( req,res ){
    appdata.splice(req.body.i, 1)
    res.json(appdata)
})

app.listen(process.env.PORT || 3000)