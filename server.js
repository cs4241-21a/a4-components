const express  = require( 'express' ),
      app      = express()

const servants = [
  {name: "Artoria Pendragon", occupation: "Saber", strength: "B", endurance: "B", agility: "B", magic: "A", luck: "A+", noble: "EX"},
  {name: "Brynhild", occupation: "Lancer", strength: "B+", endurance: "A", agility: "A", magic: "C", luck: "E", noble: "A"},
  {name: "Gilgamesh", occupation: "Archer", strength: "B", endurance: "C", agility: "C", magic: "B", luck: "A", noble: "EX"},
  {name: "Tamamo-no-Mae", occupation: "Caster", strength: "E", endurance: "E", agility: "B", magic: "A", luck: "D", noble: "B"},
  {name: "Morgan", occupation: "Berserker", strength: "C", endurance: "E", agility: "B", magic: "A+", luck: "B", noble: "EX"},
]

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( servants ) )

app.post( '/add', ( req,res ) => {
  const name = req.body.name
  const occupation = req.body.occupation
  const new_servant = generateServant(name, occupation)

  servants.push( new_servant )
  res.json( servants )
})

app.post( '/change', function( req,res ) {
  const idx = servants.findIndex( v => v.name === req.body.name )
  servants[ idx ].completed = req.body.completed
  
  res.sendStatus( 200 )
})

function generateServant( name, occupation ){
  let returndata;

  if (occupation === "Saber"){
    let returnST = getRandomAttribute(1, 3);
    let returnEN = getRandomAttribute(3, 7);
    let returnAG = getRandomAttribute(1, 4);
    let returnMG = getRandomAttribute(2, 5);
    let returnGL = getRandomAttribute(1, 5);
    let returnNP = getRandomAttribute(1, 4);
    returndata = {name: name, occupation: occupation, strength: returnST, endurance: returnEN, agility: returnAG, magic: returnMG, luck: returnGL, noble: returnNP};
  }
  else if (occupation === "Lancer"){
    let returnST = getRandomAttribute(1, 5);
    let returnEN = getRandomAttribute(3, 6);
    let returnAG = getRandomAttribute(1, 3);
    let returnMG = getRandomAttribute(3, 6);
    let returnGL = getRandomAttribute(4, 5);
    let returnNP = getRandomAttribute(1, 4);
    returndata = {name: name, occupation: occupation, strength: returnST, endurance: returnEN, agility: returnAG, magic: returnMG, luck: returnGL, noble: returnNP};
  }
  else if (occupation === "Archer"){
    let returnST = getRandomAttribute(3, 5);
    let returnEN = getRandomAttribute(3, 6);
    let returnAG = getRandomAttribute(1, 3);
    let returnMG = getRandomAttribute(3, 6);
    let returnGL = getRandomAttribute(1, 3);
    let returnNP = getRandomAttribute(1, 4);
    returndata = {name: name, occupation: occupation, strength: returnST, endurance: returnEN, agility: returnAG, magic: returnMG, luck: returnGL, noble: returnNP};
  }
  else if (occupation === "Caster"){
    let returnST = getRandomAttribute(3, 6);
    let returnEN = getRandomAttribute(3, 6);
    let returnAG = getRandomAttribute(3, 6);
    let returnMG = getRandomAttribute(1, 3);
    let returnGL = getRandomAttribute(1, 5);
    let returnNP = getRandomAttribute(1, 4);
    returndata = {name: name, occupation: occupation, strength: returnST, endurance: returnEN, agility: returnAG, magic: returnMG, luck: returnGL, noble: returnNP};
  }
  else if (occupation === "Rider"){
    let returnST = getRandomAttribute(1, 5);
    let returnEN = getRandomAttribute(1, 3);
    let returnAG = getRandomAttribute(2, 5);
    let returnMG = getRandomAttribute(3, 6);
    let returnGL = getRandomAttribute(1, 5);
    let returnNP = getRandomAttribute(1, 4);
    returndata = {name: name, occupation: occupation, strength: returnST, endurance: returnEN, agility: returnAG, magic: returnMG, luck: returnGL, noble: returnNP};

  }
  else if (occupation === "Assassin"){
    let returnST = getRandomAttribute(1, 7);
    let returnEN = getRandomAttribute(3, 7);
    let returnAG = getRandomAttribute(1, 2);
    let returnMG = getRandomAttribute(2, 6);
    let returnGL = getRandomAttribute(4, 5);
    let returnNP = getRandomAttribute(1, 4);
    returndata = {name: name, occupation: occupation, strength: returnST, endurance: returnEN, agility: returnAG, magic: returnMG, luck: returnGL, noble: returnNP};
  }

  return returndata;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

function getRandomAttribute(min, max){
  //range: high (EX, A), mid (A, B, C), low (C, D, E)
  let range = getRandomInt(min, max);

  if (range === 1){
    let num = getRandomInt(1, 20);
    if (num === 1 ){
      return "EX";
    }
    else if (num === 2 || num === 3){
      return "A++"
    }
    else if (num >= 4 && num <= 7){
      return "A+"
    }
    else if (num >= 8 && num <= 14){
      return "A"
    }
    else{
      return "A-"
    }
  }
  else if (range === 2 || range === 3){
    let num = getRandomInt(1, 10);
    if (num === 1 ){
      return "A--";
    }
    else if (num >= 2 && num <= 5){
      return "B";
    }
    else{
      return "C";
    }
  }
  else {
    let num = getRandomInt(1, 5);
    if (num === 1){
      return "C";
    }
    else if (num >=2 && num <= 4){
      return "D";
    }
    else{
      return "E";
    }
  }
}

app.listen( 8080 )