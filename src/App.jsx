import React from 'react';

let app;

class App extends React.Component{
    constructor( props ) {
      super( props )
      //initialize state here
      this.load();

      //game variables
      this.gameOver = false;
      this.timeInterval = 1500;
      this.playerScore = 0;
      this.displayMessage = document.getElementById("message");
      this.displayScore = document.getElementById("score");
      this.displaySavedScore = document.getElementById("savedScore");
      this.isKeyPressed = true;
      this.wrongKeyPressed = false;
      this.gameTimer;
      this.usernameVar = "sample";

      app = this;
    }


 
    //load in data
    load() {
      fetch('/currentUser', {
          method: 'GET',
          headers:{
            "Content-Type":"application/json"
          }
        }).then(function(response) {
          response.json().then(function(textdata) {
            //console.log(JSON.parse(textdata)[0].name);
            app.usernameVar = textdata[0].name;
            document.getElementById("playername").innerHTML = app.usernameVar;
        
            //makeTableFromData(newAppdata);
          })
        })
    }

    submit(e) {
        // prevent default form action from being carried out
        e.preventDefault()
        console.log("name: " + app.usernameVar)
        console.log("score: " + app.playerScore)

        const scoreinput = document.querySelector('#playerscore'),
              json = { playername: app.usernameVar, playerscore: app.playerScore },
              body = JSON.stringify( json )


        fetch('/submit-player-data',{
            method: 'POST',
            body: JSON.stringify({playername: app.usernameVar, playerscore: app.playerScore}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(function (response){
                //do something with the reponse 
                response.text().then(function(textdata) {
                console.log(JSON.parse(textdata));
                let newAppdata = JSON.parse(textdata);

                app.makeTableFromData(newAppdata);
            })
        })

        return false
    }

    deleteScore(e){
        e.preventDefault();

        const json = { playername: app.usernameVar},
            body = JSON.stringify( json )

        fetch('/delete-player-score', {
            method: 'POST',
            body
        })
        .then(function (response){
            //Redirect to home page
            window.location.href = "./index.html";
        })
    }

    getLeaderboard(e){
        e.preventDefault();

        fetch('/getLeaderboard', {
            method: 'GET',
            body
        })
        .then(function( response) {
            //do something with the reponse 
            response.text().then(function(textdata) {
                console.log(JSON.parse(textdata));
                let newAppdata = JSON.parse(textdata);

                app.makeTableFromData(newAppdata);
            })
            //let newResponse = JSON.parse(response)
            //console.log(newResponse[0].name);

        })
    }

    makeTableFromData(appdata){
        let table = document.getElementById("game-leaderboard");
        let data = Object.keys(appdata[0]);

        console.log(appdata)
    
        table.innerHTML = '';
        app.generateTableHead(table, data);
        app.generateTable(table, appdata);
    
    }

    generateTableHead(table, data){
        let thead = table.createTHead();
        let row = thead.insertRow();
    
        for (let key of data) {
            if(key === "name" || key === "score" || key === "rank"){
              let th = document.createElement("th");
              let text = document.createTextNode(key);
              th.appendChild(text);
              row.appendChild(th);
            }
          }
    }
    
    generateTable(table, data){
    
        let i = 0;
        console.log(data);
        
        for(let element of data){
            i++;
            let row = table.insertRow();
          
            let cell = row.insertCell();
            let text = document.createTextNode(element.name);
            cell.appendChild(text);

            let cell2 = row.insertCell();
            let text2 = document.createTextNode(element.score);
            cell2.appendChild(text2);

            let cell3 = row.insertCell();
            let text3 = document.createTextNode(element.rank);
            cell3.appendChild(text3);
            
        } 
    }

    gameLoopSetup(){
      app.playerScore = 0;
      app.gameOver = false;
      app.timeInterval = 1500;
      app.isKeyPressed = true;
      let displayScore = document.getElementById("score");
      displayScore.innerHTML = "Score: " + app.playerScore;
    
    
      app.gameLoop();
    }

    gameLoop(){

      //If the correct key was pressed at the end of the interval, the game continues
      if(app.isKeyPressed){
        app.gameOver = false;
      } else {
        app.gameOver = true;
      }
    
      //Primary game loop
      if(!app.gameOver){
        app.isKeyPressed = false;
    
        //Increase game speed over time
        if(app.playerScore % 10 === 0 && app.playerScore <= 100 && app.playerScore !== 0){
          app.timeInterval -= 50;
        }
    
        //Make a new timeout
        clearTimeout(app.gameLoop);
        app.gameTimer = setTimeout(app.gameLoop, app.timeInterval);
    
        //Set a randomized key
        let keyArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let currentKey = keyArray[app.getRandomInt(0,25)];
        let currentKeyCode = "Key"+currentKey;
    
        let displayMessage = document.getElementById("message");
        displayMessage.innerHTML = "Press " + currentKey + "!";
    
        //Make a key event listener that removes itself after success
        document.addEventListener("keydown", function(event){
    
          let timesActivated = 0;
    
          if(event.code === currentKeyCode){
    
            displayMessage.innerHTML = currentKey + " was pressed!";
            app.isKeyPressed = true;
            app.playerScore += 1;
            let displayScore = document.getElementById("score");
            displayScore.innerHTML = "Score: " + app.playerScore;
            timesActivated += 1;
    
          } else {
            if(timesActivated > 0){
              displayMessage.innerHTML = currentKey + " was not pressed! Game over!";
              wrongKeyPressed = true;
              app.gameOver = true;
              clearTimeout(gameLoop);
            }
           
            timesActivated += 1;
          }
        }, {once: true});
      } else if(app.gameOver) {
        if(!app.wrongKeyPressed){
          let displayMessage = document.getElementById("message");
          displayMessage.innerHTML = " The key was not pressed in time! Game over!";
        }
  
        let displaySavedScore = document.getElementById("savedScore");
        displaySavedScore.innerHTML = app.playerScore;
        clearTimeout(app.gameLoop);
      }
    }

     /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //render HTML
    render() {
        return <body classname="app">
        <main id="mainGame">
          <div id="directions" class="gameLabel"><h3>Press the key before time runs out!</h3></div>
          <section id="message" class="gameLabel"><h1>Start the game to get prompts!</h1></section>
          <div id="score" class="gameLabel">Score: 0</div>
          <button id="start-button" class="nes-btn is-primary" type="button" onClick={this.gameLoopSetup}>Start Game</button>
        </main>
    
        <section id="gameForms">
          <form action="/submit-player-data" class="gameForm" method="post" onSubmit={this.submit}>
            <h3 class="gameLabel">Input Player Score</h3>
            <table class="gameTable">
              <tr>
                <th><label for="playername" class="gameLabel">Name:</label></th>
                <th><label id='playername' class="gameLabel">TestName</label>
                </th>
              </tr>
              <tr>
                <th><label for="playerscore" class="gameLabel">Score:</label></th>
                <th><label id="savedScore" class="gameLabel">0</label></th>
              </tr>
            </table>
            <button id = "submit" class="nes-btn is-success">Enter Score</button>
          </form>
      
          <form action="/delete-player-score" id ="deleteScoreForm" class="gameForm" method="post" onSubmit={this.deleteScore}>
            
            <button id = "deleteButton" class="nes-btn is-warning">Delete Player Account</button>
          </form>
    
          <table id="game-leaderboard">
    
          </table>
        </section>
      </body>
    }
}
export default App;