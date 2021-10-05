import React from 'react'

class ReactTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className="table" id="tasktable">
              <tr>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Due Date in MM/DD/YYYY Form</th>
                <th>Days Until Due</th>
              </tr>
            </table>
        );
    }
}

export default ReactTable
