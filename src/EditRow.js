import React from "react";

class EditRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            score: this.props.score,
        };
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });

        return false;
    }

    finishEdit(event) {
        event.preventDefault();

        fetch('/api/edit', {
            method: 'POST',
            body: JSON.stringify({
                ...this.state,
                id: this.props.name
            }),
        })
            .then(x => x.json())
            .then(this.props.updateParent);
        return false;
    }

    removeRow(event) {
        event.preventDefault();
        fetch('/api/remove', {
            method: 'POST',
            body: JSON.stringify({
                id: this.props.name
            })
        })
            .then(x => x.json())
            .then(this.props.updateParent);
        return false;
    }

    render() {
        return (
            <tr>
                <td>{this.props.rank}</td>
                <td>
                    <input name="username"
                           value={this.state.username}
                           onChange={this.handleChange.bind(this)}/>
                </td>
                <td>
                    <input name="score"
                           value={this.state.score}
                           onChange={this.handleChange.bind(this)}/>
                </td>
                <td>{this.props.date}</td>
                <td>
                    <button type="button"
                            onClick={this.finishEdit.bind(this)}>Save
                    </button>
                    <button type="button"
                            onClick={this.removeRow.bind(this)}>Remove
                    </button>
                </td>
            </tr>
        );
    }
}


export default EditRow;