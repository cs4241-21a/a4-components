import React from "react";

// A function responsible for getting the fields from the input area
function getNewStudentFromFields() {
  let radio_elements = document.getElementsByName("year_radio"),
    radio_result = "";

  for (let i = 0; i < radio_elements.length; i++) {
    if (radio_elements[i].checked) radio_result = radio_elements[i].value;
  }

  const name_input = document.querySelector("#StudentName"),
    class_input = document.querySelector("#StudentClass"),
    role_input = document.querySelector("#StudentRole"),
    date_result = document.querySelector("#StudentGradDate"),
    json = {
      StudentName: name_input.value,
      StudentClass: class_input.value,
      StudentRole: role_input.value,
      StudentYear: radio_result,
      StudentGradDate: date_result.value,
    };
  return json;
}

// This Todo class represents each row in our forum entry used for dynamic table creation
class Todo extends React.Component {
  render() {
    // Returns a single row for the data provided
    return (
      <tr class="forum_row">
        <td class="forum_cell">{this.props.StudentName} </td>
        <td class="forum_cell">{this.props.StudentClass} </td>
        <td class="forum_cell">{this.props.StudentRole} </td>
        <td class="forum_cell">{this.props.StudentHours} </td>
        <td class="forum_cell">{this.props.StudentYear} </td>
        <td class="forum_cell">{this.props.StudentGradDate} </td>
        <td class="forum_cell">
          <button
            id={"r" + String(this.props._id)}
            class="forum_cell_button"
            onClick={(e) => this.removeEntry(this.props._id)}
          >
            Remove Entry
          </button>
        </td>
        <td class="forum_cell">
          <button
            id={"u" + String(this.props._id)}
            class="forum_cell_button"
            onClick={() => this.updateEntry(this.props._id)}
          >
            Update Entry
          </button>
        </td>
      </tr>
    );
  }

  // A method used to update an entry based on its id field
  async updateEntry(id_value) {
    const json = getNewStudentFromFields();
    json._id = id_value;
    let body = JSON.stringify(json);

    let data_value = {};
    let this_representation = this;

    // Send POST request
    let fetch_response = await fetch("/updateEntry", {
      method: "POST",
      body,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Set data value
        data_value = data;
      });
    this.props.app_class.setState({ todos: data_value });
  }

  // call this method when the checkbox for this component is clicked
  async removeEntry(id_value) {
    const json = { _id: id_value };
    let body = JSON.stringify(json);

    let data_value = {};

    // Send POST request
    let fetch_response = await fetch("/deleteEntry", {
      method: "POST",
      body,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data_value = data;
      });
    this.props.app_class.setState({ todos: data_value });
  }
}

// Main table component
class App extends React.Component {
  constructor(props) {
    super(props);
    // initialize our state
    this.state = { todos: [] };
    this.load();
  }

  // Load in our data from the server
  load() {
    fetch("/initializeData", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          todos: json,
        });
      });
  }

  // Render component HTML using JSX
  render() {
    return (
      // Return a fragment so we can return all rows in the existing table
      <React.Fragment>
        <tr class="forum_header">
          <th class="forum_header">Student Name</th>
          <th class="forum_header">Class Assignment</th>
          <th class="forum_header">Role</th>
          <th class="forum_header">Hrs/Week</th>
          <th class="forum_header">Class Year</th>
          <th class="forum_header">Grad Date</th>
          <th class="forum_header">Remove Student</th>
          <th class="forum_header">Update Student Info</th>
        </tr>
        {this.state.todos.map((todo, i) => (
          <Todo
            StudentName={todo.StudentName}
            StudentClass={todo.StudentClass}
            StudentRole={todo.StudentRole}
            StudentHours={todo.StudentHours}
            StudentYear={todo.StudentYear}
            StudentGradDate={todo.StudentGradDate}
            _id={todo._id}
            app_class={this}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
