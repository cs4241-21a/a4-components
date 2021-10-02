import React from "../_snowpack/pkg/react.js";
import {ThemeProvider, FormGroup, TextInput, ButtonPrimary, Heading} from "../_snowpack/pkg/@primer/components.js";
import {postRequest} from "../requests-helper.js";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.fields;
    if (this.state._id === void 0) {
      this.state = {
        type: "lost",
        item: "",
        when: "",
        where: "",
        description: "",
        photo: ""
      };
    }
  }
  componentWillReceiveProps(props) {
    let fields = props.fields;
    if (fields._id === void 0) {
      fields = {
        type: "lost",
        item: "",
        when: "",
        where: "",
        description: "",
        photo: ""
      };
    }
    this.setState(fields);
  }
  confirmAction() {
    if (this.props.type === "edit") {
      postRequest("/api/update", this.state).then((response) => {
        this.props.handler();
        this.setState({
          item: "",
          when: "",
          where: "",
          description: "",
          photo: ""
        });
      });
    } else if (this.props.type === "create") {
      postRequest("/api/create", this.state).then((response) => {
        this.props.handler();
        this.setState({
          item: "",
          when: "",
          where: "",
          description: "",
          photo: ""
        });
      });
    }
  }
  handleTypeLost() {
    this.setState({type: "lost"});
  }
  handleTypeFound() {
    this.setState({type: "found"});
  }
  handleItem(e) {
    this.setState({item: e.target.value});
  }
  handleWhen(e) {
    this.setState({when: e.target.value});
  }
  handleWhere(e) {
    this.setState({where: e.target.value});
  }
  handleDescription(e) {
    this.setState({description: e.target.value});
  }
  handlePhoto(e) {
    this.setState({photo: e.target.value});
  }
  render() {
    let {title} = this.props;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(FormGroup, {
      id: "editform"
    }, /* @__PURE__ */ React.createElement(Heading, {
      as: "h2"
    }, title), this.state._id == null && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      type: "radio",
      name: "type",
      value: "lost",
      id: "type1-create",
      onChange: this.handleTypeLost.bind(this),
      checked: this.state.type === "lost"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: "type1-create"
    }, "Lost"), /* @__PURE__ */ React.createElement("input", {
      type: "radio",
      name: "type",
      value: "found",
      id: "type2-create",
      onChange: this.handleTypeFound.bind(this),
      checked: this.state.type === "found"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: "type2-create"
    }, "Found")), /* @__PURE__ */ React.createElement(FormGroup.Label, {
      htmlFor: "item"
    }, "*Item: "), /* @__PURE__ */ React.createElement(TextInput, {
      onChange: this.handleItem.bind(this),
      value: this.state.item,
      type: "text",
      placeholder: "Apple Pen"
    }), /* @__PURE__ */ React.createElement(FormGroup.Label, {
      htmlFor: "when"
    }, "*When: "), /* @__PURE__ */ React.createElement(TextInput, {
      onChange: this.handleWhen.bind(this),
      value: this.state.when,
      type: "date"
    }), /* @__PURE__ */ React.createElement(FormGroup.Label, {
      htmlFor: "where"
    }, "*Where: "), /* @__PURE__ */ React.createElement(TextInput, {
      onChange: this.handleWhere.bind(this),
      value: this.state.where,
      type: "text",
      placeholder: "FH 311"
    }), /* @__PURE__ */ React.createElement(FormGroup.Label, {
      htmlFor: "description"
    }, "*Description: "), /* @__PURE__ */ React.createElement(TextInput, {
      onChange: this.handleDescription.bind(this),
      value: this.state.description,
      type: "text",
      placeholder: "Color, brand..."
    }), /* @__PURE__ */ React.createElement(FormGroup.Label, {
      htmlFor: "photo"
    }, "*Photo: "), /* @__PURE__ */ React.createElement(TextInput, {
      onChange: this.handlePhoto.bind(this),
      value: this.state.photo,
      type: "url",
      name: "photo"
    }), /* @__PURE__ */ React.createElement(ButtonPrimary, {
      onClick: this.confirmAction.bind(this)
    }, "Submit"))));
  }
}
export default Form;
