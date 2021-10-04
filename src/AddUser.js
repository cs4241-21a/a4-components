import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            score: "",
        };
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        });

        return false;
    }

    submitUser(event) {
        event.preventDefault();

        fetch('/api/add', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
            .then(x => x.json())
            .then(this.props.handler);
        return false;
    }

    render() {
        return (
            <div className="container">
                <h2>Add Score</h2>
                <br/>
                <form action="">
                    <input type="text"
                           id="username"
                           placeholder="username"
                           value={this.state.username}
                           onChange={this.handleChange.bind(this)}/>
                    <input type="text"
                           id="score"
                           placeholder="score"
                           value={this.state.score}
                           onChange={this.handleChange.bind(this)}/>
                    <button id="addUser" onClick={this.submitUser.bind(this)}>submit</button>
                </form>
            </div>
        );
    }
}


export default AddUser;