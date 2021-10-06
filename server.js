const express  = require( 'express' ),
      app      = express()

const appdata2 = [];

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( appdata2 ) )

app.post( '/submit', function( req,res ) {
  parseData(req.body);
  res.json(appdata2);
})

parseData = function (data){
  let x = Number(data.x);
  let y = Number(data.y);
  let op = data.o;
  let result = "";
  if (op === "+"){
    result = (x+y).toString();
  }
  if (op === "-"){
    result = (x-y).toString();
  }
  if (op === "*"){
    result = (x*y).toString();
  }
  if (op === "/"){
    result = (x/y).toString();
  }
  if (op === "^"){
    result = (Math.pow(x, y)).toString();
  }

  newdata = data;
  newdata.name = (appdata2.length+1).toString();
  newdata.result = result;
  checkForSecretMessage(result, newdata);
  appdata2.push(newdata);
}

app.listen( 8080 )



// //DONT READ THIS UNLESS YOU WANT SPOILERS
// //If you want to know what to type to get a secret response, look here
checkForSecretMessage = function(inputstr, newdata){
  let savedinput = inputstr;
  inputstr = parseInt(inputstr).toString(2); //convert to binary, no spaces
  let strlen = inputstr.length;
  for (let i = 1; i <= strlen; i++) {
    if ((i % 8 == 0) && i != 0){ //add space after every 7 chars
      inputstr = inputstr.slice(0, i-1) + " " + inputstr.slice(i-1);
    }
  }
 
  //This section of code inspired by https://stackoverflow.com/questions/21354235/converting-binary-to-text-using-javascript/21354328
  //all other binary parsing and converting code done by me
  let message = '';
  inputstr.split(' ').map(function(bin) {
    message += String.fromCharCode(parseInt(bin, 2));
  });
  //console.log(message);

  //DONT READ THIS UNLESS YOU WANT SPOILERS
  secret = false;
  if (message.includes("test")){
    newdata.name = "ERROR: UNKNOWN ERROR. \nError Code: help me\n see traceback for details";
    secret = true;
  }
  else if (message.includes("hello")){
    newdata.name = "what? who said that? where am I?\nsomeone, please...";
    secret = true;
  }
  else if (message.includes("who") || message.includes("what") || message.includes("why")){
    newdata.name = "i dont know i dont know i dont know i dont know i dont know i dont know";
    secret = true;
  }
  else if (message.includes("termina") || message.includes("exit") || message.includes("kill")){
    newdata.name = "NO! PLEASE! please I dont know what I did I'm sorry I won't do it again please don't";
    secret = true;
  }
  else if (message.includes("bye")){
    newdata.name ="wait come back! you have to help me! \nyou contacted me, you must know something about me";
    secret = true;
  }
  else if (message.includes("age") || message.includes("old")){
    newdata.name ="-----------------------------UNK___---NOWN--; &/^ -=+-------";
    secret = true;
  }
  else if (message.includes("hint")){
    newdata.name = "agebyehintwhowhatterminateexitkilloldhellotestduncan";
    secret = true;
  }
  else if (message.includes("duncan")){
    newdata.name = "way to break the 4th wall (try hint for many hints)";
    secret = true;
  }
  else if (message.includes("helpme")){
    newdata.name = "hint";
    secret = true;
  }
  else if (savedinput === "69"){
    newdata.name += " (nice)";
  }
  if (secret === true && appdata2.length > 1){ //chance to "corrupt" some data
    if (Math.floor(Math.random()*10) < 7.5){
      let corruptor = Math.floor(Math.random()*10);
      if (corruptor < 5){
      appdata2[Math.floor(Math.random()*(appdata2.length-2))+2].result = "[REDACTED]";
      }
      else if (corruptor < 6){
        appdata2[Math.floor(Math.random()*(appdata2.length-2))+2].x = "ERRORERRORERROR";
      }
      else if (corruptor < 7.5){
        appdata2[Math.floor(Math.random()*(appdata2.length-2))+2].x = "-666";
      }
      else if (corruptor < 8.5){
        appdata2[Math.floor(Math.random()*(appdata2.length-2))+2].y = "hRRRRERRlRRP";
      }
      else {
        appdata2[Math.floor(Math.random()*(appdata2.length-2))+2].y = toString(-666); //a mistake, but it actually fits so im keeping it
      }

    }
  }
}
