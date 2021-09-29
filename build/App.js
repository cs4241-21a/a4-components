import React from "./_snowpack/pkg/react.js";
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
      id: "r" + String(this.props.GitHubUserID),
      class: "forum_cell_button"
    }, "Remove Entry")), /* @__PURE__ */ React.createElement("td", {
      class: "forum_cell"
    }, /* @__PURE__ */ React.createElement("button", {
      id: "u" + String(this.props.GitHubUserID),
      class: "forum_cell_button"
    }, "Update Entry")));
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
    return /* @__PURE__ */ React.createElement("table", {
      class: "table_area",
      id: "forum_section"
    }, /* @__PURE__ */ React.createElement("tr", {
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
      GitHubUserID: todo.GitHubUserID
    })));
  }
}
export default App;
