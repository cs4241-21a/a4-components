import React from "../../_snowpack/pkg/react.js";
import Col from "../../_snowpack/pkg/react-bootstrap/Col.js";
import Button from "../../_snowpack/pkg/react-bootstrap/Button.js";
import {Form} from "../../_snowpack/pkg/react-bootstrap.js";
class EditRatingForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.feederData === void 0 || this.props.feederData.length === 0) {
      console.log("ROW DATA UNDEFINED");
      this.state = {
        name: "",
        year: "First-Year",
        dorm: "Daniels Hall",
        hall: "Campus Center",
        spot: "",
        notes: "N/A"
      };
    } else {
      console.log("ROW DATA GOOD!!!");
      this.state = {
        name: this.props.feederData.name,
        year: this.props.feederData.studentYear,
        dorm: this.props.feederData.favoriteDorm,
        hall: this.props.feederData.favoriteDining,
        spot: this.props.feederData.favoriteSpot,
        notes: this.props.feederData.notes
      };
    }
    const name = this.state.name;
    const studentYear = this.state.year;
    const favoriteDorm = this.state.dorm;
    const favoriteDining = this.state.hall;
    const favoriteSpot = this.state.spot;
    const notes = this.state.notes;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log("State change! Target is " + target + ", value is " + value + ", and name is " + name);
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.stayOnEdit();
    const name = this.state.name;
    const studentYear = this.state.year;
    const favoriteDorm = this.state.dorm;
    const favoriteDining = this.state.hall;
    const favoriteSpot = this.state.spot;
    const notes = this.state.notes;
    console.log("Our current name, for instance, is " + name);
    console.log("Within edit, submitting " + name + studentYear + favoriteDorm + favoriteDining + favoriteSpot + notes);
    console.log("Default row index is " + this.props.rowIndex);
    if (this.props.rowIndex === "") {
      alert("You must first select 'Edit This Row' on a row to edit its data!");
      return false;
    }
    if (name.trim() === "" || studentYear.trim() === "" || favoriteDorm.trim() === "" || favoriteDining.trim() === "" || favoriteSpot.trim() === "") {
      alert("To obtain accurate data, please be sure to respond to every question (except for additional notes)!");
      return false;
    } else {
      const jsonData = {
        index: this.props.rowIndex,
        username: this.props.username,
        name,
        studentYear,
        favoriteDorm,
        favoriteDining,
        favoriteSpot,
        notes,
        yearsRemaining: ""
      };
      fetch("/editTableData", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(jsonData)
      }).then((res) => {
        return res.json();
      }).then((json) => {
        console.log("Data uploaded successfully!");
      });
      console.log("Refreshing to show new data!");
    }
  }
  render() {
    console.log("Our feeder data is " + this.props.feederData);
    console.log("Our default student dorm is " + this.props.feederData.favoriteDorm + ", reflected in state as " + this.state.dorm);
    return /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h3", null, 'Edit a Row (click "Edit Row" above!):'), /* @__PURE__ */ React.createElement(Form, {
      onSubmit: this.handleSubmit
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "What is your name?"), /* @__PURE__ */ React.createElement(Form.Control, {
      defaultValue: this.state.name,
      name: "name",
      onChange: this.handleChange,
      type: "text"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Which year are you?"), /* @__PURE__ */ React.createElement(Form.Select, {
      defaultValue: this.state.studentYear,
      name: "year",
      onChange: this.handleChange,
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
      defaultValue: this.state.favoriteDorm,
      name: "dorm",
      onChange: this.handleChange,
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
      defaultValue: this.state.favoriteDining,
      name: "hall",
      onChange: this.handleChange,
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
      defaultValue: this.state.favoriteSpot,
      name: "spot",
      onChange: this.handleChange,
      type: "text"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      class: "mb-3"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Do you have any additional notes?"), /* @__PURE__ */ React.createElement(Form.Control, {
      defaultValue: this.state.notes,
      name: "notes",
      onChange: this.handleChange,
      type: "text"
    })), /* @__PURE__ */ React.createElement(Button, {
      variant: "danger",
      type: "submit"
    }, "Edit This Rating!")));
  }
}
export default EditRatingForm;
