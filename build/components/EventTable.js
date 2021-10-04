import React from "../_snowpack/pkg/react.js";
import EventTableRow from "./EventTableRow.js";
import EventTableEmptyRow from "./EventTableEmptyRow.js";
const EventTable = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    class: "row d-flex m-0 justify-content-center"
  }, /* @__PURE__ */ React.createElement("table", {
    class: "table table-hover col-sm-8 border border-muted"
  }, /* @__PURE__ */ React.createElement("thead", {
    class: "thead-light"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Event"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Date"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Time"), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Mandatory"), /* @__PURE__ */ React.createElement("th", null))), /* @__PURE__ */ React.createElement("tbody", null, props.events.map((event) => {
    return /* @__PURE__ */ React.createElement(EventTableRow, {
      event,
      onClickEdit: () => props.formHandler(event)
    });
  }), /* @__PURE__ */ React.createElement(EventTableEmptyRow, {
    onClickAdd: () => props.formHandler(null)
  }))));
};
export default EventTable;
