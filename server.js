const express = require('express')
const helmet = require("helmet");
const morgan = require('morgan')
const mime = require('mime')

const app = express();
app.use(helmet());
app.use(express.static('build'))
//app.use(express.static(__dirname));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))

const appdata = [
    {'name': 'Test User 1', 'age': 21, 'gender': 'Male', 'adult': 'Yes'},
    {'name': 'Test User 2', 'age': 16, 'gender': 'Male', 'adult': 'No'},
    {'name': 'Test User 3', 'age': 32, 'gender': 'Female', 'adult': 'Yes'},
    {'name': 'Test User 4', 'age': 45, 'gender': 'Other', 'adult': 'Yes'}
];

function addRowToTable(dataString) {
    let jsonApp = JSON.parse(dataString);
    //Derived attribute.
    console.log("jsonApp:\n" + JSON.stringify(jsonApp))

    jsonApp['adult'] = isAdult(jsonApp);
    console.log("jsonApp:\n" + JSON.stringify(jsonApp))
    appdata.push(jsonApp);
}

function deleteRowFromTable(dataString) {
    for (let i = 0; i < appdata.length; i++) {
        let row = appdata[i];
        console.log("dataString = " + dataString.slice(5));
        if ((i + 1).toString() === dataString.slice(5)) appdata.splice(i, 1);
    }
}

function modifyRowFromTable(dataString) {
    let jsonApp = JSON.parse(dataString);
    for (let i = 0; i < appdata.length; i++) {
        console.log("i = " + i);
        console.log("jsonApp = " + jsonApp['modifyIndex']);
        if ((i + 1).toString().normalize() === (jsonApp['modifyIndex'].toString().normalize())) {
            let row = appdata[i];
            row['name'] = jsonApp['name'];
            row['age'] = jsonApp['age'];
            row['gender'] = jsonApp['gender'];
            row['adult'] = isAdult(row);
        }
    }
}

app.use( function( req, res, next ) {
    console.log( 'url:', req.url )
    next()
})
app.get( '/', function (req, res) {
    res.sendFile(__dirname + "/src/index.html" )
})

app.get('/updatePage', function(req,res) {
    const type = mime.getType(appdata)
    res.writeHead(200, {'Content-Type': type})
    res.write(JSON.stringify(appdata))
    res.end()
})

function isAdult(data) {
    if (data['age'] >= 18)
        return "Yes";
    else
        return "No";
}

app.post('/add', function(req,res) {
    let dataString = ''
    req.on('data', function (data) {
        dataString += data
    })
    req.on('end', function() {
        console.log(dataString)
        addRowToTable(dataString)
        console.log("appdata:\n" + JSON.stringify(appdata));
        res.writeHead(200, "OK", {'Content-Type': 'text/plain'})
        res.end()
    })
})

app.post('/delete', function(req,res) {
    let dataString = ''
    req.on('data', function (data) {
        dataString += data
    })
    req.on('end', function() {
        console.log(dataString)
        deleteRowFromTable(dataString)
        console.log("appdata:\n" + JSON.stringify(appdata));
        res.writeHead(200, "OK", {'Content-Type': 'text/plain'})
        res.end()
    })
})

app.post('/modify', function(req,res) {
    let dataString = ''
    req.on('data', function (data) {
        dataString += data
    })
    req.on('end', function() {
        console.log(dataString)
        modifyRowFromTable(dataString)
        console.log("appdata:\n" + JSON.stringify(appdata));
        res.writeHead(200, "OK", {'Content-Type': 'text/plain'})
        res.end()
    })
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
})