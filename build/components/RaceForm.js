import React from "../_snowpack/pkg/react.js";
const RaceForm = (props) => {
  return /* @__PURE__ */ React.createElement("form", {
    id: "race-form",
    class: "w-full my-3"
  }, /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "name"
  }, "Racer:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "text",
    id: "name",
    placeholder: "Name (Ex: John Doe)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "team"
  }, "Team:"), /* @__PURE__ */ React.createElement("select", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "text",
    id: "team",
    placeholder: "Team (Ex: Blue)"
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }), /* @__PURE__ */ React.createElement("option", {
    value: "Redbull"
  }, "Redbull"), /* @__PURE__ */ React.createElement("option", {
    value: "McLaren"
  }, "McLaren"), /* @__PURE__ */ React.createElement("option", {
    value: "Williams"
  }, "Williams"), /* @__PURE__ */ React.createElement("option", {
    value: "N/A"
  }, "N/A")), /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "time"
  }, "Total Time:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "number",
    id: "time",
    placeholder: "Time(minutes) (Ex: 125)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-1 w-full",
    for: "laps"
  }, "Number of Laps:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "number",
    id: "laps",
    placeholder: "Time (Ex: 23)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-2 w-full",
    for: "fastest"
  }, "Fastest Lap:"), /* @__PURE__ */ React.createElement("input", {
    class: "p-2 bg-gray-600 rounded-lg race w-full",
    type: "number",
    id: "fastest",
    placeholder: "Time(seconds) (Ex: 105.63)"
  }), /* @__PURE__ */ React.createElement("label", {
    class: "pt-2 w-full",
    for: "comments"
  }, "Additional Comments:"), /* @__PURE__ */ React.createElement("textarea", {
    class: "p-2 w-full bg-gray-600 rounded-lg",
    id: "comments",
    placeholder: "Additional Comments"
  }, "None"), /* @__PURE__ */ React.createElement("button", {
    class: "\r\n            rounded-xl\r\n            hover:bg-gray-700\r\n            bg-gray-600\r\n            py-2\r\n            px-5\r\n            float-right\r\n            mt-5",
    id: "submit-button",
    onClick: props.submit
  }, "Submit"));
};
export default RaceForm;
