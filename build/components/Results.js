import React from "../_snowpack/pkg/react.js";
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
  const userlogout = function() {
    fetch("/logout", {
      method: "GET"
    });
    window.location.href = "/";
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
  getData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "\r\n    bg-gray-800\r\n    text-gray-300"
  }, /* @__PURE__ */ React.createElement("header", {
    class: "flex py-3 bg-gray-900 w-full"
  }, /* @__PURE__ */ React.createElement("h1", {
    class: "pl-5 text-5xl float-left",
    id: "title"
  }, "Race Results"), /* @__PURE__ */ React.createElement("button", {
    class: "\r\n        ml-auto\r\n        rounded-xl\r\n        px-5\r\n        mr-3\r\n        hover:bg-gray-700\r\n        bg-gray-600\r\n        float-right\r\n        text-right\r\n      ",
    id: "logout",
    onClick: userlogout
  }, "Logout")), /* @__PURE__ */ React.createElement("main", {
    class: "flex flex-col w-4/5 mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    class: "text-4xl py-3"
  }, "Athlete:"), /* @__PURE__ */ React.createElement("p", null, "To Add a participant, enter their name, team, total time, number of laps, and fastest lap."), /* @__PURE__ */ React.createElement("p", null, "To Modify a participant, enter their name, team, and update their total time, laps, and fastest lap."), /* @__PURE__ */ React.createElement("form", {
    id: "race-form",
    class: "w-full my-3"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "name"
  }, "Racer:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "text",
    id: "name",
    placeholder: "Name (Ex: John Doe)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "team"
  }, "Team:"), /* @__PURE__ */ React.createElement("select", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "text",
    id: "team",
    placeholder: "Team (Ex: Blue)"
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }), /* @__PURE__ */ React.createElement("option", {
    value: "Redbull"
  }, "Redbull"), /* @__PURE__ */ React.createElement("option", {
    value: "McLaren"
  }, "McLaren"), /* @__PURE__ */ React.createElement("option", {
    value: "Williams"
  }, "Williams"), /* @__PURE__ */ React.createElement("option", {
    value: "N/A"
  }, "N/A")), /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "time"
  }, "Total Time:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "number",
    id: "time",
    placeholder: "Time(minutes) (Ex: 125)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "laps"
  }, "Number of Laps:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "number",
    id: "laps",
    placeholder: "Time (Ex: 23)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-2 w-full",
    for: "fastest"
  }, "Fastest Lap:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "number",
    id: "fastest",
    placeholder: "Time(seconds) (Ex: 105.63)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-2 w-full",
    for: "comments"
  }, "Additional Comments:"), /* @__PURE__ */ React.createElement("textarea", {
    class: "p-2 w-full bg-gray-600 rounded-lg",
    id: "comments",
    placeholder: "Additional Comments"
  }, "None"), /* @__PURE__ */ React.createElement("button", {
    class: "\r\n          rounded-xl\r\n          hover:bg-gray-700\r\n          bg-gray-600\r\n          py-2\r\n          px-5\r\n          float-right\r\n          mt-5\r\n        ",
    id: "submit-button",
    onClick: submit
  }, "Submit")), /* @__PURE__ */ React.createElement("p", {
    id: "invalid"
  }), /* @__PURE__ */ React.createElement("h1", {
    class: "text-4xl py-3"
  }, "Race Results:"), /* @__PURE__ */ React.createElement("table", {
    class: "table-auto w-full text-center",
    id: "results-table"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Place"), /* @__PURE__ */ React.createElement("th", null, "Racer"), /* @__PURE__ */ React.createElement("th", null, "Team"), /* @__PURE__ */ React.createElement("th", null, "Total Time"), /* @__PURE__ */ React.createElement("th", null, "Number of Laps"), /* @__PURE__ */ React.createElement("th", null, "Fastest Lap"), /* @__PURE__ */ React.createElement("th", {
    class: "max-w-xs"
  }, "Comments"), /* @__PURE__ */ React.createElement("th", null, "Average Lap Time"), /* @__PURE__ */ React.createElement("th", {
    class: "cursor-pointer"
  }, "Remove")))));
};
export default Results;
