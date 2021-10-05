import React from "./_snowpack/pkg/react.js";
class todoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return /* @__PURE__ */ React.createElement("form", {
      className: "form"
    }, /* @__PURE__ */ React.createElement("label", null, "Task Name:", /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "taskname",
      value: this.state.value,
      onChange: this.handleChange
    })), /* @__PURE__ */ React.createElement("label", null, "Task Description:", /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "taskdesc",
      value: this.state.value,
      onChange: this.handleChange
    })), /* @__PURE__ */ React.createElement("label", null, "Due Date in MM/DD/YYYY Form:", /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "duedate",
      value: this.state.value,
      onChange: this.handleChange
    })), /* @__PURE__ */ React.createElement("button", {
      type: "button"
    }, "Submit"));
  }
}
export default todoForm;
