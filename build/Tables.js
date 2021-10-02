import React from "./_snowpack/pkg/react.js";
let tableInstance;
class Tables extends React.Component {
  constructor(props) {
    super(props);
    tableInstance = this;
  }
  render() {
    return tableInstance.populateTable();
  }
  populateTable() {
    const tableStarter = function(day) {
      let table2 = document.createElement("table");
      table2.id = day;
      let tr = document.createElement("tr");
      let th = document.createElement("th");
      let item = document.createTextNode(day);
      th.appendChild(item);
      tr.appendChild(th);
    };
    let json = tableInstance.props.todos;
    let tableItems = [];
    for (let count = 1; count < json.length; count++) {
      if (json[count].type === "todo" && json[count].user === json[0]) {
        tableItems.push(json[count]);
      }
    }
    tableStarter("Sunday");
    tableStarter("Monday");
    tableStarter("Tuesday");
    tableStarter("Wednesday");
    tableStarter("Thursday");
    tableStarter("Friday");
    tableStarter("Saturday");
    let table = null;
    for (let count = 0; count < tableItems.length; count++) {
      let tr = document.createElement("tr");
      let day = tableItems[count].day;
      table = document.getElementById(day);
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
    return table;
  }
}
export default Tables;
