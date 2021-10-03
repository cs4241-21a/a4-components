import React from "../_snowpack/pkg/react.js";
const EventForm = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    class: "row d-flex m-0 justify-content-center text-left"
  }, /* @__PURE__ */ React.createElement("form", {
    class: "col-sm-4 m-5 p-5 bg-dark text-light border border-light rounded",
    hidden: true
  }, /* @__PURE__ */ React.createElement("h3", {
    class: "text-center mb-5"
  }, "Schedule an Event"), /* @__PURE__ */ React.createElement("div", {
    class: "form-group row"
  }, /* @__PURE__ */ React.createElement("label", {
    for: "name",
    class: "col-sm-4 col-form-label"
  }, "Event Name:"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    class: "col-sm-8 form-control",
    placeholder: "Zoom Meeting"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "form-group row"
  }, /* @__PURE__ */ React.createElement("label", {
    for: "date",
    class: "col-sm-4 col-form-label"
  }, "Date:"), /* @__PURE__ */ React.createElement("input", {
    type: "date",
    id: "date",
    class: "col-sm-8 form-control"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "form-group row"
  }, /* @__PURE__ */ React.createElement("label", {
    for: "time",
    class: "col-sm-4 col-form-label"
  }, "Time:"), /* @__PURE__ */ React.createElement("input", {
    type: "time",
    id: "time",
    class: "col-sm-8 form-control"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "form-group row"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "form-check-label col-sm-4",
    for: "attendance"
  }, "Mandatory:"), /* @__PURE__ */ React.createElement("div", {
    class: "col-sm-8"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "form-check"
  }, /* @__PURE__ */ React.createElement("input", {
    class: "form-check-input",
    type: "checkbox",
    id: "attendance"
  })))), /* @__PURE__ */ React.createElement("div", {
    class: "text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    id: "submit-button",
    class: "btn btn-primary",
    value: ""
  }, "Save Event"))));
};
export default EventForm;
