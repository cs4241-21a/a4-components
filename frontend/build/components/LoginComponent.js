import React from "../_snowpack/pkg/react.js";
import {Header, Avatar, Button, ThemeProvider, Link} from "../_snowpack/pkg/@primer/components.js";
class LoginComponent extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement(Header.Item, null, /* @__PURE__ */ React.createElement(Header.Link, {
      href: "#",
      fontSize: 4
    }, /* @__PURE__ */ React.createElement("span", null, "Lost & Found"))), /* @__PURE__ */ React.createElement(Header.Item, {
      full: true
    }), /* @__PURE__ */ React.createElement(Header.Item, null, /* @__PURE__ */ React.createElement(Avatar, {
      src: "https://github.com/octocat.png",
      size: 40,
      square: true,
      alt: "@octocat"
    }))), /* @__PURE__ */ React.createElement(Button, null, /* @__PURE__ */ React.createElement(Link, {
      href: "http://localhost:3000/auth/github"
    }, "Login with GitHub"))));
  }
}
export default LoginComponent;
