import React from 'react';

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Entry extends React.Component
{
    // our .render() method creates a block of HTML using the .jsx format
    render()
    {
        return <tr>
            <td>{this.props.yourname}</td>
            <td>{this.props.score}</td>
            <td>{this.props.rank}</td>
        </tr>
    }
    // call this method when the checkbox for this component is clicked
    /*change(e)
    {
        this.props.onclick(this.props.name, e.target.checked)
    }*/
}

// main component
class App extends React.Component {
    constructor(props) {
        super(props)
        // initialize our state
        this.state = {appdata: []}
        this.load()
    }

    // load in our data from the server
    load() {
        fetch('/read', {method: 'get', 'no-cors': true})
            .then(response => response.json())
            .then(json => {
                this.setState({appdata: json})
            })
    }

    // render component HTML using JSX
    render() {
        return (
            <div className="App">
                <input type='text' id='inputName'/>
                <button onClick={e => this.reactSubmit(e)}>Submit</button>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Rank</th>
                    </tr>
                    {this.state.appdata.map((appdata, i) => <Entry key={i} yourname={appdata.yourname}
                                                                   score={appdata.score} rank={appdata.rank}/>)}
                </table>
            </div>
        )
    }

    // when an Todo is toggled, send data to server
    toggle(name, completed) {
        fetch('/change', {
            method: 'POST',
            body: JSON.stringify({name, completed}),
            headers: {'Content-Type': 'application/json'}
        })
    }

// add a new todo list item
    /*add(evt) {
        const value = document.querySelector('input').value

        fetch('/add', {
            method: 'POST',
            body: JSON.stringify({name: value, completed: false}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(json => {
                // changing state triggers reactive behaviors
                this.setState({appdata: json})
            })
    }*/

    reactSubmit(e) {
        e.preventDefault();
        const input = document.getElementById('inputName').value,
            input2 = document.getElementById('printScore'),
            json = {
                yourname: input,
                score: parseInt(input2.innerText),
                rank: 0
            },
            body = JSON.stringify(json)
        if (input === "") {
            window.alert("Please enter a username");
            return false;
        }

        fetch('/submit', {
            method: 'POST',
            body,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json =>{
                this.setState({appdata: json})
            })
        return false;
    }

}
export default App;

