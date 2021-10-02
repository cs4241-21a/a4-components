import React from "../_snowpack/pkg/react.js";
import {Header, Avatar, ThemeProvider, Box} from "../_snowpack/pkg/@primer/components.js";
import Form from "./Form.js";
import Table from "./Table.js";
import {getRequest, postRequest} from "../requests-helper.js";
class LostFoundComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lostItems: [], foundItems: [], activeEditObj: void 0};
    this.loadCollection();
  }
  reloadHandler() {
    this.setState({activeEditObj: void 0});
    this.loadCollection();
  }
  editHandler(e) {
    console.log("Handler for edits called" + JSON.stringify(e));
    this.setState({activeEditObj: e});
  }
  deleteHandler() {
    this.setState({activeEditObj: void 0});
    this.loadCollection();
  }
  loadCollection() {
    getRequest("/api/lostitems", {}, (data) => {
      this.setState({lostItems: data});
    });
    getRequest("/api/founditems", {}, (data) => {
      this.setState({foundItems: data});
    });
  }
  render() {
    console.log("Rerendering main app");
    let {username} = this.props;
    username = username || "username@wpi.edu";
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement(Header.Item, null, /* @__PURE__ */ React.createElement(Header.Link, {
      href: "#",
      fontSize: 4
    }, /* @__PURE__ */ React.createElement("span", null, "Lost & Found"))), /* @__PURE__ */ React.createElement(Header.Item, {
      full: true
    }, "Me"), /* @__PURE__ */ React.createElement(Header.Item, null, username), /* @__PURE__ */ React.createElement(Header.Item, null, /* @__PURE__ */ React.createElement(Avatar, {
      src: "https://github.com/octocat.png",
      size: 40,
      square: true,
      alt: "@octocat"
    }))), /* @__PURE__ */ React.createElement(Box, {
      display: "flex"
    }, /* @__PURE__ */ React.createElement(Box, {
      flexGrow: 1,
      p: 3,
      borderColor: "border.default",
      borderWidth: 1,
      borderStyle: "solid"
    }, /* @__PURE__ */ React.createElement(Table, {
      title: "Found items",
      endpoint: "founditems",
      collection: this.state.lostItems,
      deleteHandler: this.deleteHandler.bind(this),
      editHandler: this.editHandler.bind(this)
    }), /* @__PURE__ */ React.createElement(Table, {
      title: "Lost items",
      endpoint: "lostitems",
      collection: this.state.foundItems,
      deleteHandler: this.deleteHandler.bind(this),
      editHandler: this.editHandler.bind(this)
    })), /* @__PURE__ */ React.createElement(Box, {
      p: 3,
      borderColor: "border.default",
      borderWidth: 1,
      borderStyle: "solid"
    }, /* @__PURE__ */ React.createElement(Form, {
      title: "Create new lost & found item",
      type: "create",
      fields: {},
      handler: this.reloadHandler.bind(this)
    }), this.state.activeEditObj ? /* @__PURE__ */ React.createElement(Form, {
      title: "Edit lost & found item",
      type: "edit",
      fields: this.state.activeEditObj,
      handler: this.reloadHandler.bind(this)
    }) : null))));
  }
}
export default LostFoundComponent;
