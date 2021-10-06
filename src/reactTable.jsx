import React from 'react'

class ReactTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className="table" id="taskhead">
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Task Description</th>
                  <th>Due Date in MM/DD/YYYY Form</th>
                  <th>Days Until Due</th>
                </tr>
              </thead>
              <tbody id="tasktable">
              </tbody>
            </table>
        );
    }
}

export default ReactTable
