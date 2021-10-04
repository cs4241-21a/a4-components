import React from "./_snowpack/pkg/react.js";
class Location extends React.Component {
  constructor(props) {
    super(props);
  }
  calcRating(cost, priority) {
    return (priority - cost + 10) / 2;
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      ref: this.locationInput,
      id: "location" + this.props.i,
      defaultValue: this.props.location
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      ref: this.costInput,
      type: "number",
      id: "cost" + this.props.i,
      defaultValue: this.props.cost
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      ref: this.priorityInput,
      type: "number",
      id: "priority" + this.props.i,
      defaultValue: this.props.priority
    })), /* @__PURE__ */ React.createElement("td", null, this.props.rating), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
      ref: this.checkbox,
      type: "checkbox",
      id: "visited" + this.props.i,
      defaultChecked: this.props.visited
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      class: "update-button",
      onClick: (e) => this.props.update(e, this.props.i, this.props.id)
    }, "Update")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      class: "delete-button",
      onClick: (e) => this.props.delete(e, this.props.id)
    }, "Delete"))));
  }
}
export default Location;
