import React from "./_snowpack/pkg/react.js";
class ReactTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /* @__PURE__ */ React.createElement("table", {
      className: "table",
      id: "taskhead"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Task Name"), /* @__PURE__ */ React.createElement("th", null, "Task Description"), /* @__PURE__ */ React.createElement("th", null, "Due Date in MM/DD/YYYY Form"), /* @__PURE__ */ React.createElement("th", null, "Days Until Due"))), /* @__PURE__ */ React.createElement("tbody", {
      id: "tasktable"
    }));
  }
}
export default ReactTable;
