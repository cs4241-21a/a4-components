import React from "./_snowpack/pkg/react.js";
function getNewStudentFromFields() {
  let radio_elements = document.getElementsByName("year_radio"), radio_result = "";
  for (let i = 0; i < radio_elements.length; i++) {
    if (radio_elements[i].checked)
      radio_result = radio_elements[i].value;
  }
  const name_input = document.querySelector("#StudentName"), class_input = document.querySelector("#StudentClass"), role_input = document.querySelector("#StudentRole"), date_result = document.querySelector("#StudentGradDate"), json = {
    StudentName: name_input.value,
    StudentClass: class_input.value,
    StudentRole: role_input.value,
    StudentYear: radio_result,
    StudentGradDate: date_result.value
  };
  return json;
}
class Todo extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", {
      class: "forum_row"
    }, /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, this.props.StudentName, " "), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, this.props.StudentClass, " "), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, this.props.StudentRole, " "), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, this.props.StudentHours, " "), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, this.props.StudentYear, " "), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, this.props.StudentGradDate, " "), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, /* @__PURE__ */ React.createElement("button", {
      id: "r" + String(this.props._id),
      class: "forum_cell_button",
      onClick: (e) => this.removeEntry(this.props._id)
    }, "Remove Entry")), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, /* @__PURE__ */ React.createElement("button", {
      id: "u" + String(this.props._id),
      class: "forum_cell_button",
      onClick: () => this.updateEntry(this.props._id)
    }, "Update Entry")));
  }
  async updateEntry(id_value) {
    const json = getNewStudentFromFields();
    json._id = id_value;
    let body = JSON.stringify(json);
    let data_value = {};
    let this_representation = this;
    let fetch_response = await fetch("/updateEntry", {
      method: "POST",
      body
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      data_value = data;
    });
    this.props.app_class.setState({todos: data_value});
  }
  async removeEntry(id_value) {
    const json = {_id: id_value};
    let body = JSON.stringify(json);
    let data_value = {};
    let fetch_response = await fetch("/deleteEntry", {
      method: "POST",
      body
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      data_value = data;
    });
    this.props.app_class.setState({todos: data_value});
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.load();
  }
  load() {
    fetch("/initializeData", {
      method: "POST"
    }).then((response) => response.json()).then((json) => {
      this.setState({
        todos: json
      });
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", {
      class: "forum_header"
    }, /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Student Name"), /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Class Assignment"), /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Role"), /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Hrs/Week"), /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Class Year"), /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Grad Date"), /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Remove Student"), /* @__PURE__ */ React.createElement("th", {
      class: "forum_header"
    }, "Update Student Info")), this.state.todos.map((todo, i) => /* @__PURE__ */ React.createElement(Todo, {
      StudentName: todo.StudentName,
      StudentClass: todo.StudentClass,
      StudentRole: todo.StudentRole,
      StudentHours: todo.StudentHours,
      StudentYear: todo.StudentYear,
      StudentGradDate: todo.StudentGradDate,
      _id: todo._id,
      app_class: this
    })));
  }
}
export default App;
