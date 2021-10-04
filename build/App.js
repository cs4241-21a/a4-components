import React from "./_snowpack/pkg/react.js";
class Todo extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("li", null, this.props.descrip, " ", this.props.expectedTime, " ", this.props.dueDate, " ", this.props.DueDate, ":", /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.onEdit(e)
    }, "Edit"), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.onDelete(e)
    }, "Delete"));
  }
  onEdit(e) {
    this.props.edit(this.props.descrip, document.querySelector("#descrip").value, document.querySelector("#expectedTime").value, document.querySelector("#dueDate").value);
  }
  onDelete(e) {
    this.props.delete(this.props.descrip, this.props.expectedTime, this.props.dueDate);
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
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "descrip",
      onChange: this.props._change
    }), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "expectedTime",
      onChange: this.props._change
    }), /* @__PURE__ */ React.createElement("input", {
      type: "datetime-local",
      id: "dueDate",
      onChange: this.props._change
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.add(e)
    }, "add"), /* @__PURE__ */ React.createElement("ul", null, this.state.todos.map((todo, i) => /* @__PURE__ */ React.createElement(Todo, {
      key: i,
      descrip: todo.descrip,
      expectedTime: todo.expectedTime,
      dueDate: todo.dueDate,
      edit: (oldDesc, descrip, expectedTime, dueDate) => this.Edit(oldDesc, descrip, expectedTime, dueDate),
      delete: (d, e, dd) => this.Delete(d, e, dd)
    }))));
  }
  _Change(event, value) {
    event.target.value = value;
  }
  Edit(oldDesc, descrip, expectedTime, dueDate) {
    fetch("/change", {
      method: "POST",
      body: JSON.stringify({oldDesc, descrip, expectedTime, dueDate}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({todos: json});
    });
  }
  Delete(descrip, expectedTime, dueDate) {
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({descrip, expectedTime, dueDate}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({todos: json});
    });
  }
  add(evt) {
    const descrip = document.querySelector("#descrip").value, expectedTime = document.querySelector("#expectedTime").value, dueDate = document.querySelector("#dueDate").value;
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({descrip, expectedTime, dueDate}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({todos: json});
    });
  }
}
export default App;
