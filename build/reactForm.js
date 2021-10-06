import React from "./_snowpack/pkg/react.js";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {taskname: "", taskdesc: "", duedate: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleClick(e) {
    console.log("I am in click");
    e.preventDefault();
    const name = document.querySelector("#taskname");
    const desc = document.querySelector("#taskdesc");
    const due = document.querySelector("#duedate");
    let json = {taskname: name.value, taskdesc: desc.value, duedate: due.value}, body = JSON.stringify(json);
    fetch("/submit", {
      method: "POST",
      body
    }).then(function(response) {
      response.json().then(function(text) {
        var table = document.getElementById("tasktable");
        console.log(table);
        let i = table.rows.length;
        console.log(i);
        console.log(text);
        var infoRow = table.insertRow();
        var infoCell1 = infoRow.insertCell(0);
        var infoCell2 = infoRow.insertCell(1);
        var infoCell3 = infoRow.insertCell(2);
        var infoCell4 = infoRow.insertCell(3);
        infoCell1.innerHTML = text[i - 1].taskname;
        infoCell2.innerHTML = text[i - 1].taskdesc;
        infoCell3.innerHTML = text[i - 1].duedate;
        infoCell4.innerHTML = text[i - 1].daysuntil;
      });
    });
    return false;
  }
  render() {
    return /* @__PURE__ */ React.createElement("form", {
      className: "form"
    }, /* @__PURE__ */ React.createElement("label", null, "Task Name:", /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "taskname",
      taskname: this.state.taskname,
      onChange: this.handleChange
    })), /* @__PURE__ */ React.createElement("label", null, "Task Description:", /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "taskdesc",
      taskdesc: this.state.taskdesc,
      onChange: this.handleChange
    })), /* @__PURE__ */ React.createElement("label", null, "Due Date in MM/DD/YYYY Form:", /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "duedate",
      duedate: this.state.duedate,
      onChange: this.handleChange
    })), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: this.handleClick
    }, "Submit"));
  }
}
export default TodoForm;
