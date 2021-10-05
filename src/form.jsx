import React from 'react'

class todoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <form className="form">
          <label>
            Task Name:
            <input type="text" id="taskname" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Task Description:
            <input type="text" id="taskdesc" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Due Date in MM/DD/YYYY Form:
            <input type="text" id="duedate" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="button">Submit</button>
        </form>
      );
    }
  }

export default todoForm
