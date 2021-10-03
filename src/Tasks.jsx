import React from "react";
import Task from "./Task"

class Tasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {tasks: []}
        this.load()
        document.addEventListener("ftr", this.load.bind(this), false)
    }

    load() {
        fetch('/getData', {
            method: 'GET'
          })
        .then(response => response.json())
        .then(json => {
            this.setState({tasks: json})
        })
    }

    render() {
        return this.state.tasks.map((task, index) => <Task index={index} name={task.name} category={task.category} priority={task.priority} duedate={task.duedate} importance={task.importance} />)
    }
}

export default Tasks;