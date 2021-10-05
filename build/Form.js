import React from "./_snowpack/pkg/react.js";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      birthday: ""
    };
    this.requestData = props.requestData.bind(this);
  }
  submit(e) {
    e.preventDefault();
    const json = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthday: this.state.birthday
    };
    fetch("/submit", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(json)}).then(() => this.requestData()).catch((err) => {
      alert("Error: ", err);
    });
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name, value, target);
    this.setState({
      [name]: value
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("label", {
      for: "firstname"
    }, "First Name:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      name: "firstName",
      type: "text",
      id: "firstname",
      onChange: this.handleChange
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "lastname"
    }, "Last Name"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      name: "lastName",
      type: "text",
      id: "lastname",
      onChange: this.handleChange
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "birthday"
    }, "Birthday"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      name: "birthday",
      type: "date",
      id: "birthday",
      onChange: this.handleChange
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
      onClick: this.submit
    }, "Submit"));
  }
}
export default Form;
