import React from 'react';

let usernameVar = "sample";
/*
window.onload = function() {
    const button = document.getElementById( 'submit' )
    button.onclick = submit

    const deleteButton = document.getElementById('deleteButton');
    deleteButton.onclick = deleteScore;
}
*/

class App extends React.Component{
    constructor( props ) {
        super( props )
        //initialize state here
        this.load();
    }

    //load in data
    load() {
      fetch('/currentUser', {
          method: 'GET',
          headers:{
            "Content-Type":"application/json"
          }
        }).then(function(response) {
          response.text().then(function(textdata) {
            //console.log(JSON.parse(textdata)[0].name);
            usernameVar = JSON.parse(textdata)[0].name;
            document.getElementById("playername").innerHTML = usernameVar;
        
            //makeTableFromData(newAppdata);
          })
        })
    }

    submit(e) {
        // prevent default form action from being carried out
        e.preventDefault()

        const scoreinput = document.querySelector('#playerscore'),
              json = { playername: usernameVar, playerscore: playerScore },
              body = JSON.stringify( json )

        fetch('/submit',{
            method: 'POST',
            body: body,
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(function (response){
                //do something with the reponse 
                response.text().then(function(textdata) {
                console.log(JSON.parse(textdata));
                let newAppdata = JSON.parse(textdata);

                makeTableFromData(newAppdata);
            })
        })

        return false
    }

    deleteScore(e){
        e.preventDefault();

        const json = { playername: usernameVar},
            body = JSON.stringify( json )

        fetch('/delete', {
            method: 'POST',
            body
        })
        .then(function (response){
            //Redirect to home page
            window.location.href = "public/index.html";
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

                this.makeTableFromData(newAppdata);
            })
            //let newResponse = JSON.parse(response)
            //console.log(newResponse[0].name);

        })
    }

    makeTableFromData(appdata){
        let table = document.getElementById("game-leaderboard");
        let data = Object.keys(appdata[0]);
    
        table.innerHTML = '';
        this.generateTableHead(table, data);
        this.generateTable(table, appdata);
    
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
        
        for(let element of data){
            i++;
            let row = table.insertRow();
            for(key in element){
              if(key === "name" || key === "score" || key === "rank"){
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
              }
            }
        } 
    }

    //render HTML
    render() {
        return <div classname="app">
        <main id="mainGame">
          <div id="directions" class="gameLabel"><h3>Press the key before time runs out!</h3></div>
          <section id="message" class="gameLabel"><h1>Start the game to get prompts!</h1></section>
          <div id="score" class="gameLabel">Score: 0</div>
          <button id="start-button" class="nes-btn is-primary" type="button" onclick="gameLoopSetup()">Start Game</button>
        </main>
    
        <section id="gameForms">
          <form action="/submit-player-score" class="gameForm" method="post">
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
            <button id = "submit" class="nes-btn is-success" onclick={this.submit}>Enter Score</button>
          </form>
      
          <form action="/delete-player-score" id ="deleteScoreForm" class="gameForm" method="post">
            
            <button id = "deleteButton" class="nes-btn is-warning" onclick={this.deleteScore()}>Delete Player Account</button>
          </form>
    
          <table id="game-leaderboard">
    
          </table>
        </section>
        
      </div>
    }
}