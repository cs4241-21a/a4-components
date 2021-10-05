const express  = require( 'express' );
const app = express();

app.use(express.json())
app.use(express.static('build'))

let appdata = [
    {
      firstName: 'John',
      lastName: 'Doe',
      birthday: '2000-1-1',
      age: 21,
      fullName: 'John Doe'
    }
];

app.get('/', (req, res) => {
    res.sendFile(__dirname, '/build/index.html')
})

app.post('/getData', (req, res) => {
    console.log(appdata);
    res.send(appdata)
});

app.post('/submit', (req, res) => {
    console.log(req.body);

    const jsonInput = req.body;
    // Gets age of person
    const today = new Date();
    const birthday = new Date(jsonInput.birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    jsonInput.age = age;
    jsonInput.fullName = jsonInput.firstName + ' ' + jsonInput.lastName;
    console.log(jsonInput.birthday)
    appdata.push(jsonInput);

    res.end();
});

app.listen( process.env.PORT || 3000 )