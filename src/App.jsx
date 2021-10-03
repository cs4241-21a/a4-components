import React from 'react';


class Entry extends React.Component
{
    render()
    {
        return <tr id={this.props.yourname}>
            <td>{this.props.yourname}</td>
            <td>{this.props.score}</td>
            <td>{this.props.rank}</td>
        </tr>
    }
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
                this.setState({appdata: json});
            })
        return false;
    }

}
export default App;

