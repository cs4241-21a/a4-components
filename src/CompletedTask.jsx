import React from "react";

class CompletedTask extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.category}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.duedate}</td>
            </tr>
        )
    }
}

export default CompletedTask;