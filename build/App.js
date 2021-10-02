import React from "./_snowpack/pkg/react.js";
import Tables from "./Tables.js";
let appInstance;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    appInstance = this;
  }
  loadTable() {
    let json2 = null;
    fetch("/loadTable", {
      method: "POST",
      body: null,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      json2 = response;
    });
    return json2;
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", {
      method: "post"
    }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", {
      for: "todo"
    }, "Todo:"), /* @__PURE__ */ React.createElement("textarea", {
      id: "todo",
      name: "todo"
    })), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", {
      for: "day"
    }, "Select Day of the Week:"), /* @__PURE__ */ React.createElement("select", {
      id: "day",
      name: "day"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Sunday"
    }, "Sunday"), /* @__PURE__ */ React.createElement("option", {
      value: "Monday"
    }, "Monday"), /* @__PURE__ */ React.createElement("option", {
      value: "Tuesday"
    }, "Tuesday"), /* @__PURE__ */ React.createElement("option", {
      value: "Wednesday"
    }, "Wednesday"), /* @__PURE__ */ React.createElement("option", {
      value: "Thursday"
    }, "Thursday"), /* @__PURE__ */ React.createElement("option", {
      value: "Friday"
    }, "Friday"), /* @__PURE__ */ React.createElement("option", {
      value: "Saturday"
    }, "Saturday"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", {
      for: "difficulty"
    }, "Select Task Difficulty:"), /* @__PURE__ */ React.createElement("select", {
      id: "difficulty",
      name: "difficulty"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "1"
    }, "1"), /* @__PURE__ */ React.createElement("option", {
      value: "2"
    }, "2"), /* @__PURE__ */ React.createElement("option", {
      value: "3"
    }, "3"), /* @__PURE__ */ React.createElement("option", {
      value: "4"
    }, "4"), /* @__PURE__ */ React.createElement("option", {
      value: "5"
    }, "5"), /* @__PURE__ */ React.createElement("option", {
      value: "6"
    }, "6"), /* @__PURE__ */ React.createElement("option", {
      value: "7"
    }, "7"), /* @__PURE__ */ React.createElement("option", {
      value: "8"
    }, "8"), /* @__PURE__ */ React.createElement("option", {
      value: "9"
    }, "9"), /* @__PURE__ */ React.createElement("option", {
      value: "10"
    }, "10"))), /* @__PURE__ */ React.createElement("li", {
      class: "button"
    }, /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: appInstance.submit,
      id: "submitButton"
    }, "submit")))), /* @__PURE__ */ React.createElement("p", null, "In the table, click on a delete button to delete that todo, and the update button to replace any part of that todo with what's in the inputs above!"), /* @__PURE__ */ React.createElement("h2", null, "Your Todos:"), /* @__PURE__ */ React.createElement(Tables, {
      todos: appInstance.state.todos,
      update: appInstance.updateButton,
      delete: appInstance.deleteButton
    }));
  }
  submit() {
    const todoInput = document.querySelector("#todo");
    const dayInput = document.querySelector("#day");
    const difficultyInput = document.querySelector("#difficulty");
    const json2 = {
      todo: todoInput.value,
      day: dayInput.value,
      difficulty: difficultyInput.value,
      type: "todo",
      user: null
    };
    const body2 = JSON.stringify(json2);
    fetch("/submit", {
      method: "POST",
      body: JSON.stringify({todo: todoInput.value, day: dayInput.value, difficulty: difficultyInput.value, type: "todo", user: null}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json3) {
      console.log(json3);
      appInstance.setState({todos: appInstance.loadTable()});
    });
  }
  deleteButton(row) {
    const todoInput = document.querySelector("#todo");
    const dayInput = document.querySelector("#day");
    const difficultyInput = document.querySelector("#difficulty");
    json = {
      todo: todoInput.value,
      day: dayInput.value,
      difficulty: difficultyInput.value,
      type: "todo",
      _id: row._id,
      user: null
    };
    body = JSON.stringify(json);
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({todo: row.todo, day: row.day, difficulty: row.difficulty, type: "todo", _id: row._id, user: null}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json2) {
      appInstance.setState({todos: appInstance.loadTable()});
    });
  }
  updateButton(row) {
    const todoInput = document.querySelector("#todo");
    const dayInput = document.querySelector("#day");
    const difficultyInput = document.querySelector("#difficulty");
    json = {
      todo: todoInput.value,
      day: dayInput.value,
      difficulty: difficultyInput.value,
      type: "todo",
      _id: row._id,
      user: null
    };
    body = JSON.stringify(json);
    fetch("/update", {
      method: "POST",
      body: JSON.stringify({todo: todoInput.value, day: dayInput.value, difficulty: difficultyInput.value, type: "todo", _id: row._id, user: null}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json2) {
      appInstance.setState({todos: appInstance.loadTable()});
    });
  }
}
export default App;
