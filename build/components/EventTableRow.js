import React, {useState} from "../_snowpack/pkg/react.js";
const EventTableRow = (props) => {
  const [removed, setRemoved] = useState(false);
  const id = props.event._id;
  const name = props.event["name"];
  const date = props.event["date"] || "N/A";
  const time = props.event["time"] || "N/A";
  const attendance = props.event["attendance"] ? "✓" : "✖";
  const onDelete = () => {
    const body = JSON.stringify({id});
    fetch("/delete", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body
    });
    setRemoved(true);
  };
  return /* @__PURE__ */ React.createElement("tr", {
    id,
    class: "table-row",
    hidden: removed
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
    class: "icon-button",
    onClick: props.onClickEdit
  }, /* @__PURE__ */ React.createElement("img", {
    class: "icon edit-icon",
    src: "img/edit.svg",
    title: "Edit Entry"
  })), /* @__PURE__ */ React.createElement("button", {
    class: "icon-button",
    onClick: onDelete
  }, /* @__PURE__ */ React.createElement("img", {
    class: "icon delete-icon",
    src: "img/delete.svg",
    title: "Delete Entry"
  })))));
};
export default EventTableRow;
