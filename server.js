const express  = require( 'express' ),
      app      = express()

const contacts = [
  {name: 'Example', phoneNum: '123-123-1234', birthday: '10/04/2021', toGift: true, giftBy: '10/04/2021'}
]

//Helper function to remove entry from the array
const deleteEntry = function(entry){
    for (var i = 0; i < contacts.length; i++){
      if (contacts[i].name === entry.name){
        contacts.splice(i,1)
      }
    }
  }

//Helper function to calculate 30 days before the next birthday 
const calcGiftDate = function(birthday) {
    const today = new Date();
    if(birthday === ''){
      return new Date(today.getFullYear()+1, 0,1).toLocaleDateString()
    }
    const bday = new Date(birthday);
    bday.setFullYear(today.getFullYear());
    getByDay = new Date(bday)
    getByDay.setDate(getByDay.getDate() - 30)
  
    if (today >= bday) { //This year's birthday has passed so plan for the next one 
        getByDay.setFullYear(getByDay.getFullYear()+1)
    } 
    return getByDay.toLocaleDateString()
  }

app.use( express.json() )
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( contacts ) )

app.post( '/add', ( req,res ) => {
  //Remove old entry if the name is already used, in order to modify to be the new one 
  deleteEntry(req.body)
   
  //Derived field 
  giftByDate = ''
    if (req.body.toGift === "yes"){
        giftByDate = calcGiftDate(req.body.birthday)
    }
  req.body.giftBy = giftByDate

  contacts.push( req.body )
  res.json( contacts )
})

app.post('/delete', (req, res) => {
    deleteEntry(req.body) 
    res.json(contacts)
})

app.listen( 8080 )
