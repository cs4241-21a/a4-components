import {data} from "../../_snowpack/pkg/jquery.js";
import React from "../../_snowpack/pkg/react.js";
class TableDataItemWithEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.userUsername,
      index: this.props.index
    };
    this.deleteRow = this.deleteRow.bind(this);
    console.log("Userusername is " + this.props.userUsername + " and datausername is " + this.props.dataUsername);
  }
  render() {
    let rowData = this.props.data;
    if (this.props.dataUsername === this.props.userUsername) {
      return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.state.username), /* @__PURE__ */ React.createElement("td", null, rowData.name), /* @__PURE__ */ React.createElement("td", null, rowData.studentYear), /* @__PURE__ */ React.createElement("td", null, rowData.yearsRemaining), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteDorm), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteDining), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteSpot), /* @__PURE__ */ React.createElement("td", null, rowData.notes), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
        class: "btn btn-dark",
        onClick: this.editRow
      }, "Edit This Row")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
        class: "btn btn-dark",
        onClick: this.deleteRow
      }, "Delete This Row")));
    } else {
      return /* @__PURE__ */ React.createElement("td", null);
    }
  }
  deleteRow() {
    let confirmDelete = confirm("Are you sure you'd like to delete this row?");
    console.log("While the index is " + this.props.index + ", the person's index is " + this.props.personIndex);
    if (confirmDelete) {
      const json = {
        username: this.state.username,
        deletingItem: this.props.personIndex
      };
      console.log("Deleting row " + this.state.index);
      fetch("/deleteRow", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(json)
      }).then((res) => {
        return res.json();
      }).then((json2) => {
        console.log("Row deleted!!");
        setTimeout(function() {
          window.location.reload();
        }, 1e3);
      });
    }
  }
}
export default TableDataItemWithEdit;
