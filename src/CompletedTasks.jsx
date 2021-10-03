import React from "react"
import CompletedTask from "./CompletedTask"

class CompletedTasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {tasks: []}
        this.load()
        document.addEventListener("ftr-c", this.load.bind(this))
    }

    load() {
        fetch('/getCompletedData', {
            method: 'GET'
          })
        .then(response => response.json())
        .then(json => {
            this.setState({tasks: json})
        })
    }

    render() {
        return this.state.tasks.map((task) => <CompletedTask name={task.name} category={task.category} priority={task.priority} duedate={task.duedate}/>)
    }
}

export default CompletedTasks;