import React from "./_snowpack/pkg/react.js";
class Tables extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      class: "table-container"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("table", {
      id: "Sunday"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Sunday")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Todo"), /* @__PURE__ */ React.createElement("th", null, "Difficulty")), /* @__PURE__ */ React.createElement("tr", null))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("table", {
      id: "Monday"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Monday")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Todo"), /* @__PURE__ */ React.createElement("th", null, "Difficulty")), /* @__PURE__ */ React.createElement("tr", null))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("table", {
      id: "Tuesday"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Tuesday")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Todo"), /* @__PURE__ */ React.createElement("th", null, "Difficulty")), /* @__PURE__ */ React.createElement("tr", null))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("table", {
      id: "Wednesday"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Wednesday")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Todo"), /* @__PURE__ */ React.createElement("th", null, "Difficulty")), /* @__PURE__ */ React.createElement("tr", null))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("table", {
      id: "Thursday"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Thursday")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Todo"), /* @__PURE__ */ React.createElement("th", null, "Difficulty")), /* @__PURE__ */ React.createElement("tr", null))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("table", {
      id: "Friday"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Friday")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Todo"), /* @__PURE__ */ React.createElement("th", null, "Difficulty")), /* @__PURE__ */ React.createElement("tr", null))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("table", {
      id: "Saturday"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Saturday")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Todo"), /* @__PURE__ */ React.createElement("th", null, "Difficulty")), /* @__PURE__ */ React.createElement("tr", null))));
  }
  deleteButton(row) {
    const todoInput = document.querySelector("#todo");
    const dayInput = document.querySelector("#day");
    const difficultyInput = document.querySelector("#difficulty");
    json = {
      todo: todoInput.value,
      day: dayInput.value,
      difficulty: difficultyInput.value,
      type: "todo",
      _id: row._id,
      user: null
    };
    body = JSON.stringify(json);
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({todo: row.todo, day: row.day, difficulty: row.difficulty, type: "todo", _id: row._id, user: null}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json2) {
      populateTable(json2);
    });
  }
  updateButton(row) {
    const todoInput = document.querySelector("#todo");
    const dayInput = document.querySelector("#day");
    const difficultyInput = document.querySelector("#difficulty");
    json = {
      todo: todoInput.value,
      day: dayInput.value,
      difficulty: difficultyInput.value,
      type: "todo",
      _id: row._id,
      user: null
    };
    body = JSON.stringify(json);
    fetch("/update", {
      method: "POST",
      body: JSON.stringify({todo: todoInput.value, day: dayInput.value, difficulty: difficultyInput.value, type: "todo", _id: row._id, user: null}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json2) {
      populateTable(json2);
    });
  }
  populateTable(json2) {
    const todoInput = document.querySelector("#todo");
    const dayInput = document.querySelector("#day");
    const difficultyInput = document.querySelector("#difficulty");
    const tableDeleter = function(day) {
      let table = document.getElementById(day);
      let rowCount = table.rows.length;
      for (let count = 1; count < rowCount; count++) {
        table.deleteRow(1);
      }
    };
    json2 = {
      todo: todoInput.value,
      day: dayInput.value,
      difficulty: difficultyInput.value,
      type: "todo",
      user: null
    };
    body = JSON.stringify(json2);
    fetch("/loadTable", {
      method: "POST",
      body: JSON.stringify({todo: todoInput.value, day: dayInput.value, difficulty: difficultyInput.value, type: "todo", user: null}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json3) {
      let tableItems = [];
      for (let count = 1; count < json3.length; count++) {
        if (json3[count].type === "todo" && json3[count].user === json3[0]) {
          tableItems.push(json3[count]);
        }
      }
      tableDeleter("Sunday");
      tableDeleter("Monday");
      tableDeleter("Tuesday");
      tableDeleter("Wednesday");
      tableDeleter("Thursday");
      tableDeleter("Friday");
      tableDeleter("Saturday");
      for (let count = 0; count < tableItems.length; count++) {
        let tr = document.createElement("tr");
        let day = tableItems[count].day;
        let table = document.getElementById(day);
        let td = document.createElement("td");
        let item = document.createTextNode(tableItems[count].todo);
        td.appendChild(item);
        tr.appendChild(td);
        td = document.createElement("td");
        item = document.createTextNode(tableItems[count].difficulty);
        td.appendChild(item);
        tr.appendChild(td);
        td = document.createElement("td");
        item = document.createElement("button");
        item.appendChild(document.createTextNode("UPDATE"));
        td.appendChild(item);
        tr.appendChild(td);
        item.onclick = function() {
          updateButton(tableItems[count]);
        };
        td = document.createElement("td");
        item = document.createElement("button");
        item.appendChild(document.createTextNode("DELETE"));
        td.appendChild(item);
        tr.appendChild(td);
        item.onclick = function() {
          deleteButton(tableItems[count]);
        };
        table.appendChild(tr);
      }
    });
  }
}
export default Tables;
