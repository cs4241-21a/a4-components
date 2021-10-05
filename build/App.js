import React from "./_snowpack/pkg/react.js";
import todoForm from "./form.js";
class App extends React.Component {
  submit = function(e) {
    e.preventDefault();
    const name = document.querySelector("#taskname");
    const desc = document.querySelector("#taskdesc");
    const due = document.querySelector("#duedate");
    json = {taskname: name.value, taskdesc: desc.value, duedate: due.value}, body = JSON.stringify(json);
    fetch("/submit", {
      method: "POST",
      body
    }).then(function(response) {
      response.json().then(function(text) {
        var table = document.getElementById("tasktable");
        let i = text.length;
        var infoRow = table.insertRow(i);
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
  };
  render() {
    const {name} = this.props;
    return /* @__PURE__ */ React.createElement("root", null, /* @__PURE__ */ React.createElement("todoForm", null), /* @__PURE__ */ React.createElement("table", null));
  }
}
export default App;
