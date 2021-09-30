import React from "react";

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

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Todo extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
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

    // </td><td class="forum_cell">CS 1102</td><td class="forum_cell">SA</td><td class="forum_cell">10</td><td class="forum_cell">Fourth</td><td class="forum_cell">2022-05-16</td><td class="forum_cell"><button id="r6144f558ead9c9d6f9a017ad" class="forum_cell_button">Remove Entry</button></td><td class="forum_cell"><button id="u6144f558ead9c9d6f9a017ad" class="forum_cell_button">Update Entry</button>
    // StudentName: dataStringParsed.StudentName,
    //       StudentClass: dataStringParsed.StudentClass,
    //       StudentRole: dataStringParsed.StudentRole,
    //       StudentHours: studentHours,
    //       GitHubUserID: request.user,
    //       StudentYear: dataStringParsed.StudentYear,
    //       StudentGradDate: dataStringParsed.StudentGradDate
    // <li>{this.props.name} :
    //   <input type="checkbox" defaultChecked={this.props.completed} onChange={e => this.change(e)} />
    // </li>
  }

  // call this method when the checkbox for this component is clicked
  async updateEntry(id_value) {
    // prevent default form action from being carried out
    // e.preventDefault();
    // console.log("Update");
    // console.log(e)
    // console.log(idVal);
    // this.props.onclick(this.props.name, e.target.checked)
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
        // Create table
        // initialize_list(data);

        // Update data
        // previous_app_data = data;

        // return data;
        // App.load()
        data_value = data;
        // console.log("Before inside");
        // console.log(data);
        // console.log(this_representation);
        // this_representation.setState({ todos: data_value });
        // this_representation.setState({ todos: data_value });
        // console.log("After inside");
      });

    // console.log(fetch_response)
    // console.log("Before outside");
    // console.log(data_value);
    // console.log(this);
    // console.log(this.props.app_class);
    // this.setState({ todos: data_value });
    this.props.app_class.setState({ todos: data_value });
    // console.log("After outside");
  }
  
  // call this method when the checkbox for this component is clicked
  async removeEntry(id_value) {
    // prevent default form action from being carried out
    // e.preventDefault();
    // console.log("Update");
    // console.log(e)
    // console.log(idVal);
    // this.props.onclick(this.props.name, e.target.checked)
    const json = {_id : id_value}
    // json._id = id_value;
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
        // Create table
        // initialize_list(data);

        // Update data
        // previous_app_data = data;

        // return data;
        // App.load()
        data_value = data;
        // console.log("Before inside");
        // console.log(data);
        // console.log(this_representation);
        // this_representation.setState({ todos: data_value });
        // this_representation.setState({ todos: data_value });
        // console.log("After inside");
      });

    // console.log(fetch_response)
    // console.log("Before outside");
    // console.log(data_value);
    // console.log(this);
    // console.log(this.props.app_class);
    // this.setState({ todos: data_value });
    this.props.app_class.setState({ todos: data_value });
    // console.log("After outside");
  }
}

// main component
class App extends React.Component {
  constructor(props) {
    super(props);
    // initialize our state
    this.state = { todos: [] };
    this.load();
    // console.log(props.submitButton)
    // props.submitButton.onClick = this.addItem;
    // console.log(props.submitButton)
  }

  // Function that is responsible for adding an item to our forum
  // addItem = function (e) {
  //   // prevent default form action from being carried out
  //   e.preventDefault();

  //   console.log("Hello there")

  //   const json = getNewStudentFromFields(),
  //     body = JSON.stringify(json);

  //   // Submit the POST request
  //   fetch("/submit", {
  //     method: "POST",
  //     body,
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       // Initialize the table
  //       // initialize_list(data);

  //       // Reset the data list
  //       // previous_app_data = data;

  //       return data;
  //     });

  //   return false;
  // };

  // load in our data from the server
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
    // .then((response) => {
    //   this.setState({
    //     todos: response,
    //   });
    // });
  }

  // render component HTML using JSX
  render() {
    return (
      // <table class="table_area" id="forum_section">
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
        {/* </table> */}
      </React.Fragment>
      // <div className="App">
      //   <input type='text' /><button onClick={e => this.add(e)}>add</button>
      //   <ul>
      //     {this.state.todos.map((todo, i) => <Todo key={i} name={todo.name} completed={todo.completed} onclick={this.toggle} />)}
      //   </ul>
      // </div>
    );
  }

  // // when an Todo is toggled, send data to server
  // toggle(name, completed) {
  //   fetch('/change', {
  //     method: 'POST',
  //     body: JSON.stringify({ name, completed }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  // }

  // // add a new todo list item
  // add(evt) {
  //   const value = document.querySelector('input').value

  //   fetch('/add', {
  //     method: 'POST',
  //     body: JSON.stringify({ name: value, completed: false }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       // changing state triggers reactive behaviors
  //       this.setState({ todos: json })
  //     })
  // }
}

export default App;
