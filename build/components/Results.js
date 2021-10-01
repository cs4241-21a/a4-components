import React from "../_snowpack/pkg/react.js";
import Header from "./Header.js";
import RaceForm from "./RaceForm.js";
import RaceTable from "./RaceTable.js";
const Results = () => {
  const submit = function(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const team = document.getElementById("team");
    const time = document.getElementById("time");
    const laps = document.getElementById("laps");
    const fastest = document.getElementById("fastest");
    const comments = document.getElementById("comments");
    const json = {
      name: name.value,
      team: team.value,
      time: time.value,
      laps: laps.value,
      fastest: fastest.value,
      comments: comments.value
    };
    for (let x in json) {
      if (json[x] === "") {
        document.getElementById("invalid").innerText = "Invalid entry, missing: " + x;
        return;
      }
    }
    document.getElementById("invalid").innerText = "";
    const body = JSON.stringify(json);
    fetch("/submit", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(res) {
      if (res.acknowledged === true) {
        getData();
      }
    });
    return false;
  };
  function getData() {
    fetch("/results", {
      method: "GET"
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      redrawTable(data);
    });
  }
  const remove = function(e) {
    e.preventDefault();
    var path = e.path || e.composedPath && e.composedPath();
    const name = path[1].cells[1].innerText;
    const team = path[1].cells[2].innerText;
    const json = {name, team};
    const body = JSON.stringify(json);
    fetch("/remove", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(res) {
      if (res.acknowledged === true) {
        getData();
      }
    });
    return false;
  };
  function redrawTable(values) {
    const headers = [
      "Place",
      "Racer",
      "Team",
      "Total Time",
      "Number of Laps",
      "Fastest Lap",
      "Comments",
      "Average Lap Time",
      "Remove"
    ];
    let table = document.getElementById("results-table");
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    let r = document.createElement("tr");
    for (let header of headers) {
      let h = document.createElement("th");
      let hval = document.createTextNode(header);
      h.appendChild(hval);
      r.appendChild(h);
    }
    table.appendChild(r);
    if (values.length === 0) {
      return;
    }
    values.forEach((element) => {
      let row = document.createElement("tr");
      let placeNode = document.createElement("td");
      let placeText = document.createTextNode(values.indexOf(element) + 1);
      placeNode.appendChild(placeText);
      row.appendChild(placeNode);
      for (let value in element) {
        if (value !== "_id" && value !== "userID") {
          let valueNode = document.createElement("td");
          let valueText = document.createTextNode(element[value]);
          valueNode.appendChild(valueText);
          if (value === "comments") {
            valueNode.classList.add("max-w-xs");
          }
          row.appendChild(valueNode);
        }
      }
      let deleteElement = createDelete();
      deleteElement.classList.add("cursor-pointer");
      deleteElement.onclick = remove;
      row.appendChild(deleteElement);
      table.appendChild(row);
    });
  }
  function createDelete() {
    let deleteNode = document.createElement("td");
    let deleteText = document.createTextNode("delete");
    deleteNode.appendChild(deleteText);
    return deleteNode;
  }
  return /* @__PURE__ */ React.createElement("div", {
    onLoad: getData(),
    className: "\r\n    bg-gray-800\r\n    text-gray-300"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    class: "flex flex-col w-4/5 mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    class: "text-4xl py-3"
  }, "Athlete:"), /* @__PURE__ */ React.createElement("p", null, "To Add a participant, enter their name, team, total time, number of laps, and fastest lap."), /* @__PURE__ */ React.createElement("p", null, "To Modify a participant, enter their name, team, and update their total time, laps, and fastest lap."), /* @__PURE__ */ React.createElement(RaceForm, {
    submit
  }), /* @__PURE__ */ React.createElement("p", {
    id: "invalid"
  }), /* @__PURE__ */ React.createElement("h1", {
    class: "text-4xl py-3"
  }, "Race Results:"), /* @__PURE__ */ React.createElement(RaceTable, null)));
};
export default Results;
