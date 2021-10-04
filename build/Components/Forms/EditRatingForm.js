import React from "../../_snowpack/pkg/react.js";
import Col from "../../_snowpack/pkg/react-bootstrap/Col.js";
import Button from "../../_snowpack/pkg/react-bootstrap/Button.js";
import {Form} from "../../_snowpack/pkg/react-bootstrap.js";
class EditRatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h3", null, 'Edit a Row (click "Edit Row" above!):'), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "What is your name?"), /* @__PURE__ */ React.createElement(Form.Control, {
      type: "text"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Which year are you?"), /* @__PURE__ */ React.createElement(Form.Select, {
      "aria-label": "Select A Student Year"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "First-Year"
    }, "First-Year"), /* @__PURE__ */ React.createElement("option", {
      value: "Sophomore"
    }, "Sophomore"), /* @__PURE__ */ React.createElement("option", {
      value: "Junior"
    }, "Junior"), /* @__PURE__ */ React.createElement("option", {
      value: "Senior"
    }, "Senior"), /* @__PURE__ */ React.createElement("option", {
      value: "Graduate"
    }, "Graduate Student"))), /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "What is your favorite dorm?"), /* @__PURE__ */ React.createElement(Form.Select, {
      "aria-label": "Select Your Favorite Dorm"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Daniels Hall"
    }, "Daniels Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "East Hall"
    }, "East Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "Ellsworth Apartments"
    }, "Ellsworth Apartments"), /* @__PURE__ */ React.createElement("option", {
      value: "Faraday Hall"
    }, "Faraday Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "Founders Hall"
    }, "Founders Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "Fuller Apartments"
    }, "Fuller Apartments"), /* @__PURE__ */ React.createElement("option", {
      value: "Hampton Inn"
    }, "Hampton Inn"), /* @__PURE__ */ React.createElement("option", {
      value: "Institute Hall"
    }, "Institute Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "Messenger Hall"
    }, "Messenger Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "Morgan Hall"
    }, "Morgan Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "Riley Hall"
    }, "Riley Hall"), /* @__PURE__ */ React.createElement("option", {
      value: "Stoddard Complex"
    }, "Stoddard Complex"), /* @__PURE__ */ React.createElement("option", {
      value: "WPI Townhouses"
    }, "WPI Townhouses"), /* @__PURE__ */ React.createElement("option", {
      value: "Other Housing"
    }, "Other Housing"))), /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "What is your favorite dining hall?"), /* @__PURE__ */ React.createElement(Form.Select, {
      "aria-label": "Select Your Favorite Dining Hall"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Campus Center"
    }, "Campus Center"), /* @__PURE__ */ React.createElement("option", {
      value: "DAKA (Morgan)"
    }, "DAKA (Morgan)"), /* @__PURE__ */ React.createElement("option", {
      value: "Dunkin Donuts"
    }, "Dunkin Donuts"), /* @__PURE__ */ React.createElement("option", {
      value: "Goat's Head"
    }, "Goat's Head"), /* @__PURE__ */ React.createElement("option", {
      value: "Starbucks"
    }, "Starbucks"))), /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "What is your favorite spot on campus?"), /* @__PURE__ */ React.createElement(Form.Control, {
      type: "text"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Do you have any additional notes?"), /* @__PURE__ */ React.createElement(Form.Control, {
      type: "text"
    })), /* @__PURE__ */ React.createElement(Button, {
      variant: "primary",
      type: "submit"
    }, "Edit This Rating!")));
  }
}
export default EditRatingForm;
