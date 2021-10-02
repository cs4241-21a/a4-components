const express  = require( 'express' ),
      app      = express()
      port     = 3000

class TableEntry {
 
   constructor(data) {
      this.id = data[0];
      this.fname = data[1];
      this.lname = data[2];
      this.sex = data[3]
      this.ageClass = data[4]; 
      this.dateJoined = data[5];
      this.membershipType = data[6];
      this.expireDate = data[7];
    }
}

const appdata = [
  new TableEntry([1, 'John', 'Stewart', 'Male', 'Master1', '2020-01-11', 'Yearly', '2021-01-11']),
  new TableEntry([2, 'Jimmy', 'McGill', 'Male', 'Junior', '2019-02-15', 'Yearly', '2020-02-15']),
  new TableEntry([3, 'Stewart', 'Johnson', 'Male', 'Open', '2020-03-16', 'Monthly', '2020-04-16'])
]

app.use( express.json() )
app.use( express.urlencoded({ extended:true }) )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

// route to get all docs
app.get( '/', (req,res) => {
  console.log(req.body)
  res.sendFile(__dirname + '/build/index.html')
})

app.get( '/retrieve', ( req, res ) => res.json( appdata ) )

app.get( '/add', (req, res) => {
  console.log("Inside get /add")
  res.sendFile(__dirname + '/build/index.html')
})

app.get( '/modify', (req, res) => {
  console.log("Inside get /modify")
  res.sendFile(__dirname + '/build/index.html')
})

app.get( '/delete', (req, res) => {
  console.log("Inside get /delete")
  res.json( appdata ) 
})

app.post( '/add', (req, res) => {
  console.log("Inside post /add")
  console.log(req.body)
  calculateNewId(req)
  verifyEntry(req, res)
  calculateExpireDate(req)
  addEntry(req, res)
  res.json( appdata ) 
})

app.post( '/modify', (req, res) =>  {
  console.log("Inside post /modify")
  console.log(req.body)
  verifyEntry(req, res)
  calculateExpireDate(req)
  modifyEntry(req,res)
  res.json( appdata ) 
})

app.post ( '/delete', (req, res) => {
  console.log( "Received delete request for: " + req.body.id )

  for (let entry of appdata) {
    if (entry.id == req.body.id) {
      appdata.splice(appdata.indexOf(entry), 1)
    }
  }
  res.json( appdata ) 
})


function calculateNewId(req) {
  console.log("Inside calculateNewId")
  req.body.id  = appdata[appdata.length-1].id + 1
}

function verifyEntry (req, res) {
  d = new Date(req.body.dateJoined)
  dateIsValid = (d.getTime() === d.getTime())
  if (req.body.fname === '' || req.body.lname === '' || !dateIsValid
        ||  req.body.ageClass === '' || req.body.membershipType === '')
    {
      res.status(400).send('verifyEntry: Bad Request!')
    }
}


function calculateExpireDate (req) {
  expireDate = new Date(req.body.dateJoined)

  //different cases for different membership types
  switch (req.body.membershipType) { 
    case 'Monthly':
      expireDate.setMonth(expireDate.getMonth() + 1)
      break;
    case 'Yearly': 
      expireDate.setFullYear(expireDate.getFullYear() + 1)
      break;
    case 'Lifetime':
      expireDate.setFullYear(expireDate.getFullYear() + 100)
      break;
    default:
      console.log('calculateExpireDate: Unknown membership type' + req.body.membershipType)
  }

  //do some date -> string conversions
  month = (expireDate.getMonth() + 1)
  date = expireDate.getDate()

  let stringMonth = month
  if (month < 10) {
    stringMonth = '0' + stringMonth
  } 
  
  let stringDate = date  
  if (date < 10) {
    stringDate = '0' + stringDate
  }

  //you should be done here
  req.body.expireDate = expireDate.getFullYear() + '-' + stringMonth + '-' + stringDate
}

function addEntry(req, res) {
  appdata.push(req.body)
}

function modifyEntry(req, res) {
  for (let entry of appdata) {
    if (entry.id == req.body.id) {
      entry.fname = req.body.fname
      entry.lname = req.body.lname
      entry.sex = req.body.sex
      entry.ageClass = req.body.ageClass
      entry.dateJoined = req.body.dateJoined
      entry.membershipType = req.body.membershipType
      entry.expireDate =  req.body.expireDate
    }
  }
}


app.listen( process.env.PORT || port )
