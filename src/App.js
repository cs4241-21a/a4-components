import React from "react";
import AddUser from "./AddUser";
import EditRow from "./EditRow";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: null,
            values: {}
        };
        fetch('/api/values', {method: 'GET'})
            .then(x => x.json())
            .then(this.provideUpdate.bind(this));
    }

    provideUpdate(state) {
        this.setState({
            editing: null,
            values: state
        });
    }

    beginEditing(event) {
        event.preventDefault();
        this.setState({
            editing: event.target.name,
            values: this.state.values
        });
        return false;
    }

    removeRow(event) {
        event.preventDefault();
        fetch('/api/remove', {
            method: 'POST',
            body: JSON.stringify({
                id: event.target.name
            })
        })
            .then(x => x.json())
            .then(this.provideUpdate);
        return false;
    }

    render() {
        const elements = Object.entries(this.state.values)
            .sort(([, a], [, b]) => b.score - a.score)
            .map(([id, x], index) => {
                if (this.state.hasOwnProperty("editing") && this.state.editing === id) {
                    return (<EditRow name={id}
                                     username={x.username}
                                     score={x.score}
                                     rank={index + 1}
                                     date={x.date}
                                     updateParent={this.provideUpdate.bind(this)}/>);
                } else {
                    return (<tr>
                        <td>{index + 1}</td>
                        <td>{x.username}</td>
                        <td>{x.score}</td>
                        <td>{x.date}</td>
                        <td>
                            <button type="button"
                                    name={id}
                                    onClick={this.beginEditing.bind(this)}>Edit
                            </button>
                            <button type="button"
                                    name={id}
                                    onClick={this.removeRow.bind(this)}>Remove
                            </button>
                        </td>
                    </tr>);
                }
            });

        return (
            <div>
                <h1>User Leaderboard</h1>
                <AddUser handler={this.provideUpdate.bind(this)}/>
                <table id="leaderboard">
                    <tr>
                        <th>Ranking</th>
                        <th>Username</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>{elements}</tbody>
                </table>
            </div>
        );
    }
}


export default App;