import React from "react";

class Assignment extends React.Component {
    
    onEdit(event) {
        this.props.onEdit(this.props.hwData)
    }

    onDelete(event) {
        this.props.onDelete(this.props.hwData)
    }

    render() {
        return (
            <tr>
                <td>{this.props.hwData.name}</td>
                <td>{this.props.hwData.priority}</td>
                <td>{this.props.hwData.course}</td>
                <td>{this.props.hwData.dueDate}</td>
                <td>{this.props.hwData.complete ? "Complete" : "Incomplete"}</td>

                <button class="mui-btn mui-btn--raised"
                        onClick={e => this.onEdit(e)}>
                    Edit
                </button>
                <button class="mui-btn mui-btn mui-btn--raised mui-btn--danger mui--text-black"
                        onClick={e => this.onDelete(e)}>
                    Delete
                </button>
            </tr>
        )
    }
}

export default Assignment;