import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
let mountTableNode = document.getElementById("forum_section");
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), mountTableNode);
const addItemFunc = function(e) {
  e.preventDefault();
  const json = getNewStudentFromFields(), body = JSON.stringify(json);
  fetch("/submit", {
    method: "POST",
    body
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), mountTableNode).load();
  });
  return false;
};
function getNewStudentFromFields() {
  let radio_elements = document.getElementsByName("year_radio"), radio_result = "";
  for (let i = 0; i < radio_elements.length; i++) {
    if (radio_elements[i].checked)
      radio_result = radio_elements[i].value;
  }
  const name_input = document.querySelector("#StudentName"), class_input = document.querySelector("#StudentClass"), role_input = document.querySelector("#StudentRole"), date_result = document.querySelector("#StudentGradDate"), json = {
    StudentName: name_input.value,
    StudentClass: class_input.value,
    StudentRole: role_input.value,
    StudentYear: radio_result,
    StudentGradDate: date_result.value
  };
  return json;
}
window.onload = function() {
  const submitButton = document.getElementById("add_entry_button");
  submitButton.onclick = addItemFunc;
};
