import React from "./_snowpack/pkg/react.js";
class Contact extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("li", null, this.props.name, " | ", this.props.phoneNum, " | ", this.props.birthday, " | ", this.props.toGift, " | ", this.props.giftBy);
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
    }, /* @__PURE__ */ React.createElement("h3", null, "Update"), /* @__PURE__ */ React.createElement("h4", null, " To add a new entry fill in the fields with a unique name, and click Submit. To modify an entry fill in the fields with the name of the entry to update. To delete enter the name of the entry to be deleted and click Delete. Also, Gift selected with no birthday will default to the Jan. 1st of the coming year. "), /* @__PURE__ */ React.createElement("label", {
      for: "name"
    }, "Name:"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "name",
      placeholder: "Name"
    }), /* @__PURE__ */ React.createElement("label", {
      for: "phoneNum"
    }, "Phone number:"), /* @__PURE__ */ React.createElement("input", {
      type: "tel",
      id: "phoneNum",
      placeholder: "012-345-6789",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
      required: true
    }), /* @__PURE__ */ React.createElement("label", {
      for: "birthday"
    }, "Birthday:"), /* @__PURE__ */ React.createElement("input", {
      type: "date",
      id: "birthday"
    }), /* @__PURE__ */ React.createElement("label", {
      for: "toGift"
    }, "To buy a gift?:"), /* @__PURE__ */ React.createElement("input", {
      type: "checkbox",
      id: "toGift"
    }), /* @__PURE__ */ React.createElement("button", {
      id: "submit",
      onClick: (e) => this.add(e)
    }, "Submit"), /* @__PURE__ */ React.createElement("button", {
      id: "delete",
      onClick: (e) => this.delete(e)
    }, "Delete"), /* @__PURE__ */ React.createElement("h3", null, "Contacts"), /* @__PURE__ */ React.createElement("ul", null, "Name | Phone Number | Birthday | To buy a gift? | If so, buy gift by..."), /* @__PURE__ */ React.createElement("ul", null, this.state.todos.map((todo, i) => /* @__PURE__ */ React.createElement(Contact, {
      key: i,
      name: todo.name,
      phoneNum: todo.phoneNum,
      birthday: todo.birthday,
      toGift: todo.toGift,
      giftBy: todo.giftBy
    }))));
  }
  add(evt) {
    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phoneNum").value;
    const birthday = document.querySelector("#birthday").value;
    let toGift = "no";
    if (document.querySelector("#toGift").checked) {
      toGift = "yes";
    }
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({name, phoneNum: phone, birthday, toGift}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      console.log(json);
      this.setState({todos: json});
    });
  }
  delete(evt) {
    const name = document.querySelector("#name").value;
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({name}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({todos: json});
    });
  }
}
export default App;
