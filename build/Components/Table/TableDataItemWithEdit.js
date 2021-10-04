import {data} from "../../_snowpack/pkg/jquery.js";
import React from "../../_snowpack/pkg/react.js";
class TableDataItemWithEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    console.log("Userusername is " + this.props.userUsername + " and datausername is " + this.props.dataUsername);
  }
  render() {
    let rowData = this.props.data;
    if (this.props.dataUsername === this.props.userUsername) {
      return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.userUsername), /* @__PURE__ */ React.createElement("td", null, rowData.name), /* @__PURE__ */ React.createElement("td", null, rowData.studentYear), /* @__PURE__ */ React.createElement("td", null, rowData.yearsRemaining), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteDorm), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteDining), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteSpot), /* @__PURE__ */ React.createElement("td", null, rowData.notes), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
        class: "btn btn-dark",
        onClick: this.editRow
      }, "Edit This Row")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
        class: "btn btn-dark",
        onClick: this.props.deleteRow
      }, "Delete This Row")));
    } else {
      return /* @__PURE__ */ React.createElement("td", null);
    }
  }
  editRow() {
  }
}
export default TableDataItemWithEdit;
