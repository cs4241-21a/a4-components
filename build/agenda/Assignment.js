import React from "../_snowpack/pkg/react.js";
class Assignment extends React.Component {
  onEdit(event) {
    this.props.onEdit(this.props.hwData);
  }
  onDelete(event) {
    this.props.onDelete(this.props.hwData);
  }
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.hwData.name), /* @__PURE__ */ React.createElement("td", null, this.props.hwData.priority), /* @__PURE__ */ React.createElement("td", null, this.props.hwData.course), /* @__PURE__ */ React.createElement("td", null, this.props.hwData.dueDate), /* @__PURE__ */ React.createElement("td", null, this.props.hwData.complete ? "Complete" : "Incomplete"), /* @__PURE__ */ React.createElement("button", {
      class: "mui-btn mui-btn--raised",
      onClick: (e) => this.onEdit(e)
    }, "Edit"), /* @__PURE__ */ React.createElement("button", {
      class: "mui-btn mui-btn mui-btn--raised mui-btn--danger mui--text-black",
      onClick: (e) => this.onDelete(e)
    }, "Delete"));
  }
}
export default Assignment;
