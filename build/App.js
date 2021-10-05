import React from "./_snowpack/pkg/react.js";
import Form from "./Form.js";
import "./style.css.proxy.js";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
    this.requestData = this.requestData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.dateToReadable = this.dateToReadable.bind(this);
    this.requestData();
  }
  dateToReadable(date) {
    const split = date.split("-");
    return monthNames[split[1] - 1] + " " + split[2] + ", " + split[0];
  }
  requestData() {
    console.log("requesting");
    fetch("/getData", {method: "POST", body: ""}).then((response) => {
      return response.json();
    }).then((json) => {
      this.handleData(json);
    });
  }
  handleData(json) {
    console.log(json);
    let rows = [];
    rows.push(/* @__PURE__ */ React.createElement(Row, {
      firstName: "First Name",
      birthday: "Birthday",
      age: "Age",
      fullName: "Full Name"
    }));
    json.forEach((entry) => {
      rows.push(/* @__PURE__ */ React.createElement(Row, {
        firstName: entry.firstName,
        birthday: this.dateToReadable(entry.birthday),
        age: entry.age,
        fullName: entry.fullName
      }));
    });
    console.log("Rows", rows);
    this.setState({
      rows
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement(Form, {
      requestData: this.requestData
    }), /* @__PURE__ */ React.createElement(Database, {
      rows: this.state.rows
    }));
  }
}
class Database extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "database-view"
    }, this.props.rows);
  }
}
function Row(props) {
  return /* @__PURE__ */ React.createElement("div", {
    id: "entry"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, " ", props.firstName, " ")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, " ", props.birthday, " ")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, " ", props.age, " ")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, " ", props.fullName, " ")));
}
export default App;
