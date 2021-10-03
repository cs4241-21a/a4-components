import React from "react";

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {};
        this.render()
    }

    render(mode) {
        var importance;
        if (this.props.importance == 101) {
            importance = <span style={{color: '#dc3545'}}>Overdue!</span>
        } else {
            importance = <span>{this.props.importance}%</span>
        }

        // Probably isn't the most react way to do it but oops
        if (this.state.editing) {
            return (
                <tr>
                    <td><input type='checkbox' label='Complete this task' onClick={this.completeItem}></input></td>
                    <td><input type='text' defaultValue={this.props.name}></input></td>
                    <td><input type='text' defaultValue={this.props.category}></input></td>
                    <td><select defaultValue={this.props.priority}><option value='1'>1 (most important)</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4 (least important)</option></select></td>
                    <td><input type='date' defaultValue={this.props.duedate}></input></td>
                    <td>{importance}</td>
                    <td><button class='btn btn-primary' onClick={this.editItemActually}>Save</button></td>
                    <td><button class='btn btn-danger' onClick={this.deleteItem}>Delete</button></td>
                </tr>
            )
        } else if (this.state.deleted) {
            return null
        }
            return (
                <tr>
                    <td><input type='checkbox' label='Complete this task' onClick={this.completeItem}></input></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.category}</td>
                    <td>{this.props.priority}</td>
                    <td>{this.props.duedate}</td>
                    <td>{importance}</td>
                    <td><button class='btn btn-primary' onClick={this.editItem}>Edit</button></td>
                    <td><button class='btn btn-danger' onClick={this.deleteItem}>Delete</button></td>
                </tr>
            )
        }
    
    completeItem = event => {
        fetch('/completeData', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"index": this.props.index})
        })
        .then(response => response.text())
        .then(text => {
            if (text != "OK") {
                toaster("The task wasn't marked as completed. Try again later.")
            } else {
                this.setState({"deleted": true})
                const event = new Event("ftr-c")
                document.dispatchEvent(event)
                toaster("Nice job! Task marked as completed.")
            }
        })
    }

    editItem = event => {
        console.log("Editing!")
        // I wanted to not to inject directly into the DOM, so you get the not so supported forceUpdate method!
        this.setState({"editing": true})
    }

    editItemActually = event => {
        // Could be more reusable by going up to the nearest tr
        var table = event.target.parentNode.parentNode;
        var name = table.cells[1].children[0].value
        var category = table.cells[2].children[0].value
        var priority = table.cells[3].children[0].value
        var duedate = table.cells[4].children[0].value

        var data;

        data = {"index": this.props.index, "name": name, "priority": priority, "category": category, "duedate": duedate}

        fetch('/patchData', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(text => {
            if (text != "OK") {
                toaster("The task couldn't be edited. Try again later.")
            } else {
                this.props.name = name
                this.props.priority = priority
                this.props.category = category
                this.props.duedate = duedate

                this.setState({"editing": false})
                toaster("The task has been edited successfully.")
            }
        })
    }

    deleteItem = event => {
        fetch('/deleteData', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"index": this.props.index})
        })
        .then(response => response.text())
        .then(text => {
            if (text != "OK") {
                toaster("The task wasn't deleted. Try again later.")
            } else {
                this.setState({"deleted": true})
                toaster("The task has been deleted successfully.")
            }
        })
    }
}

export default Task;