
import React from "react";
//import 'https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.5.5.min.css';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {assignments:[]}

    this.load = this.load.bind(this)
    this.submit = this.submit.bind(this)
    this.doneAssignment = this.doneAssignment.bind(this)
    this.render = this.render.bind(this)

    this.load()
  }

  load(){
    let blankjson = {}
    let body = JSON.stringify(blankjson)
    fetch('/submit', {
      method:'POST',
      body
    })
    .then(function(response){
      return response.json()
    }).then(data => {
      this.setState({assignments:data})
    })
  }
  
  submit(e){
    e.preventDefault()
    const json = {}
    json["courseName"] = document.getElementById("courseName").value
    json["assignmentName"] = document.getElementById("assignmentName").value
    json["dueDate"] = document.getElementById("dueDate").value
    json["submissionType"] = document.getElementById("submissionType").value
    json["description"] = document.getElementById("description").value

    const body = JSON.stringify(json)

    fetch('/submit', {
      method:'POST',
      body
    })
    .then(function(response){
      return response.json()
    }).then(data => {
      this.setState({assignments:data})
    })

  }

  doneAssignment(num){
    const json = {}
    json["removeAssignment"] = num

    const body = JSON.stringify(json)

    fetch('/submit', {
      method:'POST',
      body
    })
    .then(function(response){
      return response.json()
    }).then(data => {
      this.setState({assignments:data})
    })
  }
  
  render() {
    let rows = []
    for(let i = 0; i < this.state.assignments.length; i++){
      let assignment = this.state.assignments[i]

      let rawDueDate = assignment.dueDate;
      let dateObj = new Date(rawDueDate)
      let dueDate = (dateObj.toLocaleString('en-US'));

      let row = (
        <tr>
          <td>{assignment.courseName}</td>
          <td>{assignment.assignmentName}</td>
          <td>{dueDate}</td>
          <td>{assignment.daysLeft}</td>
          <td>{assignment.submissionType}</td>
          <td>{assignment.description}</td>
          <td><button type="button" id={"turnedInButton" + i} onClick={() => {this.doneAssignment(i)}}>Done!</button></td>
        </tr>
      )

      rows.push(row)
    }

    return (
      <>
        <h1>Enter new assignments here:</h1>
        <form id='assignmentInfo' action="">
          <p>Course Name:</p>
          <input type='text' id='courseName'></input>
          <p>Assignment Name:</p>
          <input type='text' id='assignmentName'></input>
          <p>Due date:</p>
          <input type='datetime-local' id='dueDate'></input>
          <p>Submission type:</p>
          <select id="submissionType" name="submissionType">
            <option value="Canvas">Canvas</option>
            <option value="In-person">In-person</option>
            <option value="Email">Email</option>
            <option value="InstructAssist">InstructAssist</option>
            <option value="GitHub">GitHub</option>
            <option value="Other">Other</option>
          </select>
          <p>Description (optional):</p>
          <input type='text' id='description'></input>
          <button type="submit" id='formSubmit' onClick={this.submit}>submit</button>
        </form>
        <h1>List of assignments:</h1>
        <table id="assignmentTable">
          <thead id="assignmentTableHead">
          <tr>
            <th>Course Name</th>
            <th>Assignment Name</th>
            <th>Due date</th>
            <th>Days left</th>
            <th>Submission Type</th>
            <th>Description</th>
            <th>Turned In?</th>
          </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
