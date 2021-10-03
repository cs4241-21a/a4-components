import React from "../_snowpack/pkg/react.js";
const EventTableRow = (props) => {
  const id = props.event._id;
  const name = props.event["name"];
  const date = props.event["date"] || "N/A";
  const time = props.event["time"] || "N/A";
  const attendance = props.event["attendance"] ? "✓" : "✖";
  console.log(`${id} row here!`);
  return /* @__PURE__ */ React.createElement("tr", {
    id,
    class: "table-row"
  }, /* @__PURE__ */ React.createElement("td", {
    class: "align-middle"
  }, name), /* @__PURE__ */ React.createElement("td", {
    class: "align-middle"
  }, date), /* @__PURE__ */ React.createElement("td", {
    class: "align-middle"
  }, time), /* @__PURE__ */ React.createElement("td", {
    class: "align-middle"
  }, attendance), /* @__PURE__ */ React.createElement("td", {
    class: "icon-button-cell"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "icon-button-container"
  }, /* @__PURE__ */ React.createElement("button", {
    class: "icon-button"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "icon edit-icon",
    src: "img/edit.svg",
    title: "Edit Entry"
  })), /* @__PURE__ */ React.createElement("button", {
    class: "icon-button"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "icon delete-icon",
    src: "img/delete.svg",
    title: "Delete Entry"
  })))));
};
export default EventTableRow;
