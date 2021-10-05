import React from 'react';

class Score extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.score}</td>
                <td>{this.props.game}</td>
                <td>{this.props.highscore.toString()}</td>
                <td>
                    <span class="material-icons-outlined iconButton" onClick={ e => this.props.editEntry(e, this.props.name, this.props.game, this.props.score, this.props.id)}>edit</span>
                </td>
                <td>
                    <span class="material-icons-outlined iconButton" onClick={ e => this.props.deleteEntry(e, this.props.id)}>delete_forever</span>
                </td>
            </tr>
        )
    }
}

class Scoreboard extends React.Component {
    render() {
        return(
            <div class="gridTable">
                <table id="scoreTable">
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Game</th>
                        <th>High Score?</th>
                    </tr>
                    {this.props.scores.map( (score,i) => <Score key={i} name={score.name} game={score.game} score={score.score} highscore={score.highscore} id={score.id} editEntry={this.props.editEntry} deleteEntry={this.props.deleteEntry} />)}
                </table>
            </div>
        )
    }
}

let AppInstance;
class App extends React.Component {
    constructor( props ) {
        super( props );
        
        AppInstance = this;
        // initialize our state
        this.state = { scores:[], modifyID:-1 };
        this.update();
    }

    // Creates the JSON object from the form
    makeFormJSON() {
        const name = document.getElementById('nameForm');
        const gameSelect = document.getElementById('gameForm');
        let game = gameSelect.options[gameSelect.selectedIndex];
        const score = document.getElementById('scoreForm');
        const id = this.state.modifyID;
        
        const json = {
            name: name.value,
            game: game.value,
            score: +score.value,
            highscore: false,
            id: id
        };
        return json;
    };

    update() {
        fetch( '/update', { method:'POST', 'no-cors':true })
            .then( response => response.json() )
            .then( json => {
                this.setState({ scores:json });
        })
    }

    submitEntry(e) {
        // Prevent default form action from being carried out
        e.preventDefault();

        let newJSONEntry = this.makeFormJSON(); // Call the helper function to make the JSON from the form
        // let json = JSON.parse(body); // Parse that string back

        // Check if these fields are loaded correctly
        if(newJSONEntry['name'] === "" ||
            newJSONEntry['game'] === "-" ||
            newJSONEntry['score'] < 0) {
            alert("One or more fields aren't filled properly.");
            return;
        }

        console.log("Name: %s || Game: %s || Score: %d", newJSONEntry['name'], newJSONEntry['game'], newJSONEntry['score']);

        fetch('/submit', { // Send the POST request
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJSONEntry)
        }).then( response => {
            this.resetEntry(e);
            this.update(); // Update state
        })
    }

    editEntry(evt, name, game, score, id) {
        console.log("Populating entries for edit: Name: %s || Game: %s || Score: %d || ID: %d", name, game, score, id);
    
        document.getElementById("submitButton").value = "Modify";
        document.getElementById('nameForm').value = name;
        document.getElementById('scoreForm').value = score;
        AppInstance.setState({ modifyID: id });
        let gameSelect = document.getElementById('gameForm');
        switch(game) {
            case 'Mario Bros.':
                gameSelect.selectedIndex = 1;
                break;
            case 'Donkey Kong':
                gameSelect.selectedIndex = 2;
                break;
            case 'Street Racing':
                gameSelect.selectedIndex = 3;
                break;
            case 'Tetris':
                gameSelect.selectedIndex = 4;
                break;
            default:
                console.log("Uh oh");
        }
    }

    deleteEntry(evt, deleteID) {
        const jsonID = {
            id: deleteID
        };
    
        console.log("Sending delete request for [%d]", deleteID);

        fetch('/delete', { // Send the POST request
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonID)
        }).then( response => {
            AppInstance.update(); // Update state
        })
    }

    resetEntry(e) {
        e.preventDefault();

        console.log("Reseting Entry Form");

        this.setState({ modifyID: -1 }); // Reset the modifyID

        document.getElementById('nameForm').value = ""; // Reset the fields
        let gameSelect = document.getElementById('gameForm');
        gameSelect.selectedIndex = 0;
        document.getElementById('scoreForm').value = "";
        document.getElementById("submitButton").value = "Submit";
    }

    render() {
        return (
            <div class="gridContainer">
                <div class="gridTitle">
                    <h1>Arcade Score Keeper</h1>
                </div>
                        
                <div class="gridForm">
                    <div class="instructions">
                        <h2>Introduction:</h2>
                        <p>This is a simple form for keeping score.</p>
                        <form>
                            <label for="name">Name:</label>
                            <input name="name" type='text' id='nameForm' placeholder="Enter Name Here"/>
                            <br/><br/>

                            <label for="game">Game:</label>
                            <select name="game" id='gameForm'>
                                <option disabled={true} selected="true" class="defaultSelection">-</option>
                                <option>Mario Bros.</option>
                                <option>Donkey Kong</option>
                                <option>Street Racing</option>
                                <option>Tetris</option>
                            </select>
                            <br/><br/>

                            <label for="score">Score:</label>
                            <input name="score" type='number' id='scoreForm' min="0"/>
                            <br/><br/>

                            <input type="submit" value="New Score" class='button' id="newButton" onClick={e => this.resetEntry(e)}/>
                            <input type="submit" value="Submit" class='button' id="submitButton" onClick={e => this.submitEntry(e)}/>
                        </form>
                    <h2>Instructions:</h2>
                        <p>
                            To make an entry, use the form above.
                            <br/>
                            To edit an entry, click on the
                            <span class="material-icons-outlined">edit</span>
                            button.
                            <br/>
                            To delete an entry, click on the
                            <span class="material-icons-outlined">delete_forever</span>
                            button.
                        </p>
                    </div>
                </div>
                <Scoreboard scores={this.state.scores} editEntry={this.editEntry} deleteEntry={this.deleteEntry} />
            </div>
        )
    }
}

export default App;