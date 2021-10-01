import React from "./_snowpack/pkg/react.js";
import Tables from "./Tables.js";
class App extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("label", {
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
      onClick: this.submit,
      id: "submitButton"
    }, "submit")));
  }
  submit() {
    const todoInput = document.querySelector("#todo");
    const dayInput = document.querySelector("#day");
    const difficultyInput = document.querySelector("#difficulty");
    const json = {
      todo: todoInput.value,
      day: dayInput.value,
      difficulty: difficultyInput.value,
      type: "todo",
      user: null
    };
    const body = JSON.stringify(json);
    fetch("/submit", {
      method: "POST",
      body: JSON.stringify({todo: todoInput.value, day: dayInput.value, difficulty: difficultyInput.value, type: "todo", user: null}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json2) {
      console.log(json2);
      populateTable(json2);
    });
  }
}
export default App;
