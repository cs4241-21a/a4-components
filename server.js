const express  = require( 'express' ),
    app      = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const todos = [
    { name:'buy groceries', completed:false }
]

const appdata = [
    {'yourname': 'Greg', 'score': 745, 'rank': 1},
    {'yourname': 'Mark', 'score': 687, 'rank': 2},
    {'yourname': 'Liam', 'score': 430, 'rank': 3}
]

app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use( express.json() )

// this will most likely be 'build' or 'public'
app.use( express.static( 'build' ) )

app.get( '/read', ( req, res ) => res.json( appdata ) )


app.post('/submit', bodyParser.json(), async (req, res) =>{
    await addRow(req.body);
    res.json( appdata.sort(compare) );
})

function compare(a, b) {
    const rankA = a.rank;
    const rankB = b.rank;

    let comparison = 0;
    if (rankA > rankB) {
        comparison = 1;
    } else if (rankA < rankB) {
        comparison = -1;
    }
    return comparison;
}

function addRow(jsonApp) {


    jsonApp['rank'] = 0;
    for(let i = 0; i < appdata.length; i++){
        let user = appdata[i];

        if (jsonApp['yourname'] === user.yourname && (parseInt(jsonApp['score']) > user.score)){
            deleteRow(i + 1);
        } else if (jsonApp['yourname'] === user.yourname && (parseInt(jsonApp['score']) <= user.score)) {
            // return error message
            return;
        }
    }
    appdata.push(jsonApp);
    calcRank();
}

function deleteRow(dataString) {
    let rankDel = appdata[dataString - 1].rank
    appdata.splice(dataString - 1, 1);
    updateRank(rankDel);
}

function calcRank(){
    // for each rank of value rank or lower add 1 to number
    let newRank = appdata.length;
    for(let user of appdata){
        let rank = user.rank
        if (rank === 0){
            //Calculate rank value
            let tempRank = Infinity;
            for(let otherUser of appdata){
                if((parseInt(user.score) >= parseInt(otherUser.score)) && (tempRank > otherUser.rank) && (otherUser.rank !== 0)){
                    tempRank = otherUser.rank;
                }
                if(otherUser.rank >= tempRank){
                    otherUser.rank++;
                }
            }
            if (tempRank !== Infinity){
                newRank = tempRank;
            }
            user.rank = newRank;
        }
    }
} //calculates and updates ranks when users are added
function updateRank(rankDel){
    for(let user of appdata){
        if (user.rank > rankDel){
            user.rank--;
        }
    }
    calcRank();
} //updates ranks when users are deleted

app.listen( process.env.PORT || 8080 )
