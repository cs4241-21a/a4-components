import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {taskname: '', taskdesc: '', duedate: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleClick(e) {
      // prevent default form action from being carried out
      console.log("I am in click")
      e.preventDefault()
      const name = document.querySelector( '#taskname' )
      const desc = document.querySelector( '#taskdesc' )
      const due = document.querySelector( '#duedate' )
            let json = { taskname: name.value, taskdesc: desc.value, duedate: due.value},
            body = JSON.stringify( json )
      
      fetch( '/submit', {
        method:'POST',
        body 
      }) 
      .then( function( response ) {
        // do something with the reponse
        response.json().then(function (text) {
          var table = document.getElementById("tasktable")
          console.log(table)
          let i = table.rows.length
          console.log(i)
          console.log(text)
          var infoRow = table.insertRow()
          var infoCell1 = infoRow.insertCell(0)
          var infoCell2 = infoRow.insertCell(1)
          var infoCell3 = infoRow.insertCell(2)
          var infoCell4 = infoRow.insertCell(3)
          infoCell1.innerHTML = text[i-1].taskname
          infoCell2.innerHTML = text[i-1].taskdesc
          infoCell3.innerHTML = text[i-1].duedate
          infoCell4.innerHTML = text[i-1].daysuntil
        });
      })
    
      return false
    }

    render() {
      return (
        <form className="form">
          <label>
            Task Name:
            <input type="text" id="taskname" taskname={this.state.taskname} onChange={this.handleChange} />
          </label>
          <label>
            Task Description:
            <input type="text" id="taskdesc" taskdesc={this.state.taskdesc} onChange={this.handleChange} />
          </label>
          <label>
            Due Date in MM/DD/YYYY Form:
            <input type="text" id="duedate" duedate={this.state.duedate} onChange={this.handleChange} />
          </label>
          <button type="button" onClick={this.handleClick}>Submit</button>
        </form>
      );
    }
  }

export default TodoForm