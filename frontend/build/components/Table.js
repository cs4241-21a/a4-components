import React from "../_snowpack/pkg/react.js";
import {Heading, ThemeProvider, Button} from "../_snowpack/pkg/@primer/components.js";
import {getRequest, postRequest} from "../requests-helper.js";
class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  onEdit(e) {
    let id = e.target.parentElement.parentElement.id;
    console.log("Edit pressed for " + id);
    let obj = this.props.collection.find((x) => x._id === id);
    this.props.editHandler(obj);
  }
  onDelete(e) {
    let id = e.target.parentElement.parentElement.id;
    console.log("Delete pressed for " + id);
    postRequest("/api/delete", {_id: id}).then(this.props.deleteHandler);
  }
  computeRows() {
    var tbody = [];
    for (let info of this.props.collection) {
      let row = [];
      row.push(/* @__PURE__ */ React.createElement("td", null, info.item));
      row.push(/* @__PURE__ */ React.createElement("td", null, info.when));
      row.push(/* @__PURE__ */ React.createElement("td", null, info.where));
      row.push(/* @__PURE__ */ React.createElement("td", null, info.description));
      row.push(/* @__PURE__ */ React.createElement("td", null, info.photo));
      row.push(/* @__PURE__ */ React.createElement("td", null, info.emailme));
      row.push(/* @__PURE__ */ React.createElement("td", null, info.created, " days ago"));
      if (info.permissions === "write") {
        row.push(/* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Button, {
          onClick: this.onDelete.bind(this)
        }, "Delete"), /* @__PURE__ */ React.createElement(Button, {
          onClick: this.onEdit.bind(this)
        }, "Edit")));
      }
      tbody.push(/* @__PURE__ */ React.createElement("tr", {
        key: info._id,
        id: info._id
      }, row));
    }
    return tbody;
  }
  render() {
    let rows = this.computeRows();
    let {title, endpoint} = this.props;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(Heading, {
      as: "h2"
    }, title), /* @__PURE__ */ React.createElement("table", {
      id: endpoint
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Item"), /* @__PURE__ */ React.createElement("th", null, "When"), /* @__PURE__ */ React.createElement("th", null, "Where"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Photo Link"), /* @__PURE__ */ React.createElement("th", null, "Email me!"), /* @__PURE__ */ React.createElement("th", null, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, rows))));
  }
}
export default Table;
