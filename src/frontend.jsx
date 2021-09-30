import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let mountTableNode = document.getElementById("forum_section");
ReactDOM.render(<App />, mountTableNode);

// Function that is responsible for adding an item to our forum
const addItemFunc = function (e) {
  // prevent default form action from being carried out
  e.preventDefault();

  const json = getNewStudentFromFields(),
    body = JSON.stringify(json);

  // Submit the POST request
  fetch("/submit", {
    method: "POST",
    body,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Calls the App's render function to ensure it is reloaded after every addition to the table
      ReactDOM.render(<App />, mountTableNode).load();
    });

  return false;
};

// Function that is responsible for getting all fields from the input area
function getNewStudentFromFields() {
  let radio_elements = document.getElementsByName("year_radio"),
    radio_result = "";

  for (let i = 0; i < radio_elements.length; i++) {
    if (radio_elements[i].checked) radio_result = radio_elements[i].value;
  }

  const name_input = document.querySelector("#StudentName"),
    class_input = document.querySelector("#StudentClass"),
    role_input = document.querySelector("#StudentRole"),
    date_result = document.querySelector("#StudentGradDate"),
    json = {
      StudentName: name_input.value,
      StudentClass: class_input.value,
      StudentRole: role_input.value,
      StudentYear: radio_result,
      StudentGradDate: date_result.value,
    };
  return json;
}

// Sets up the onload function for the window
window.onload = function () {
  const submitButton = document.getElementById("add_entry_button");
  submitButton.onclick = addItemFunc;
};
