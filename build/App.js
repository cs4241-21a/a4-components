import React from "./_snowpack/pkg/react.js";
class Todo extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.list_entry), /* @__PURE__ */ React.createElement("td", null, this.props.quantity), /* @__PURE__ */ React.createElement("td", null, this.props.deadline), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      type: "checkbox",
      onChange: (e) => this.change(e)
    })));
  }
  change(e) {
    if (e.target.checked) {
      e.target.parentElement.parentElement.setAttribute("Style", "background-color: green");
    } else {
      e.target.parentElement.parentElement.setAttribute("Style", "background-color: none");
    }
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
    }, /* @__PURE__ */ React.createElement("h2", null, "Shopping List"), /* @__PURE__ */ React.createElement("div", {
      className: "instructions"
    }, /* @__PURE__ */ React.createElement("p", null, "Add items to the shopping list by entering an item in the first field and how many of that item you need in the second."), /* @__PURE__ */ React.createElement("p", null, "Note that the quantity field only accepts numbers."), /* @__PURE__ */ React.createElement("p", null, "You can also indicate if an item is urgent so it can be visually indicated as such.")), /* @__PURE__ */ React.createElement("form", {
      id: "my_form"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "list_entry",
      name: "list_entry",
      placeholder: "Add item to shopping list"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      id: "quantity",
      name: "quantity",
      placeholder: "Quantity"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "checkbox"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "checkbox",
      id: "urgency",
      name: "urgency"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: "urgency"
    }, "Urgent?")), /* @__PURE__ */ React.createElement("button", {
      id: "submit_button",
      onClick: (e) => {
        this.add(e);
      }
    }, "Add item")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
      id: "shopping_list"
    }, /* @__PURE__ */ React.createElement("tr", {
      className: "header_row"
    }, /* @__PURE__ */ React.createElement("th", null, "Item"), /* @__PURE__ */ React.createElement("th", null, "Quantity"), /* @__PURE__ */ React.createElement("th", null, "Recommended Deadline"), /* @__PURE__ */ React.createElement("th", null, "Got Item?")), this.state.todos.map((todo, i) => /* @__PURE__ */ React.createElement(Todo, {
      key: i,
      list_entry: todo.list_entry,
      quantity: todo.quantity,
      deadline: todo.deadline,
      onclick: this.toggle
    }))));
  }
  toggle(name, completed) {
    fetch("/change", {
      method: "POST",
      body: JSON.stringify({name, completed}),
      headers: {"Content-Type": "application/json"}
    });
  }
  add(evt) {
    const input = document.querySelector("#my_form").elements;
    console.log("Started Add");
    var json = {};
    for (var i = 0; i < input.length - 1; i++) {
      var item = input.item(i);
      if (item.type == "checkbox") {
        json[item.name] = item.checked;
      } else {
        json[item.name] = item.value;
      }
    }
    let today = new Date().toLocaleDateString();
    let deadline = new Date(today);
    if (json["urgency"]) {
      deadline.setDate(deadline.getDate() + 1);
      json["color"] = "orange";
    } else {
      deadline.setDate(deadline.getDate() + 7);
      json["color"] = "yellow";
    }
    json["creation_date"] = today;
    json["deadline"] = deadline.toLocaleDateString();
    let body = JSON.stringify(json);
    fetch("/add", {
      method: "POST",
      body,
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json2) => {
      console.log(json2);
      this.setState({todos: json2});
    });
  }
}
export default App;
