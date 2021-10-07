import React from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
class PeopleDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num_of_people: "1"};
    this.getPeopleValue = this.getPeopleValue.bind(this);
  }
  getPeopleValue = (e) => {
    this.setState({num_of_people: e.target.value});
    const {onNewSelection} = this.props;
    onNewSelection(e.target.value);
  };
  resetState() {
    this.setState({num_of_people: "1"});
  }
  render() {
    return /* @__PURE__ */ React.createElement("select", {
      id: "people_input",
      class: "form-control",
      value: this.state.num_of_people,
      style: {width: "fit-content", textAlign: "center"},
      onChange: this.getPeopleValue
    }, /* @__PURE__ */ React.createElement("option", {
      selected: true
    }, " 1 "), /* @__PURE__ */ React.createElement("option", null, " 2 "), /* @__PURE__ */ React.createElement("option", null, " 3 "), /* @__PURE__ */ React.createElement("option", null, " 4 "), /* @__PURE__ */ React.createElement("option", null, " 5 "), /* @__PURE__ */ React.createElement("option", null, " 6 "), /* @__PURE__ */ React.createElement("option", null, " 7 "), /* @__PURE__ */ React.createElement("option", null, " 8 "), /* @__PURE__ */ React.createElement("option", null, " 9 "), /* @__PURE__ */ React.createElement("option", null, " 10 "));
  }
}
export default PeopleDropDown;
