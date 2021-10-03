import React from "./_snowpack/pkg/react.js";
import "./style.css.proxy.js";
class Todo extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("li", null, this.props.yourname + this.props.birth + this.props.cur);
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.load();
  }
  load() {
    fetch("/read", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({todos: json});
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("h1", {
      class: "spacious flex-container"
    }, "Information about Internet Lurkers in The Database"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Names:"), /* @__PURE__ */ React.createElement("th", null, "Birth Years:"), /* @__PURE__ */ React.createElement("th", null, "Year Timestamps:"), /* @__PURE__ */ React.createElement("th", null, "Age Timestamps:")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, " yourName"), /* @__PURE__ */ React.createElement("td", null, " 1111"), /* @__PURE__ */ React.createElement("td", null, " 2222"), /* @__PURE__ */ React.createElement("td", null, " 1111"))), /* @__PURE__ */ React.createElement("form", {
      action: ""
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "yourname",
      defaultValue: "your name here"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "birth",
      defaultValue: "your birth year"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "cur",
      defaultValue: "current year"
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.add(e)
    }, "add")), /* @__PURE__ */ React.createElement("ul", null, this.state.todos.map((todo, i) => /* @__PURE__ */ React.createElement(Todo, {
      key: i,
      yourname: todo.yourname,
      birth: todo.birth,
      cur: todo.cur
    }))));
  }
  add(evt) {
    const valueName = document.getElementById("yourname").value;
    const valueBirth = document.getElementById("birth").value;
    const valueCur = document.getElementById("cur").value;
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({yourname: valueName, birth: valueBirth, cur: valueCur}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({todos: json});
    });
  }
}
export default App;
