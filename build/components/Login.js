import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import "../css/tailwind.css.proxy.js";
const Login = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl m-auto border border-gray-600 w-1/5"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "rounded-t-xl bg-gray-900 mx-auto text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    id: "title"
  }, " Connect Using: ")), /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-col justify-center m-auto text-center"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-3xl",
    href: `https://github.com/login/oauth/authorize?client_id=6293d146755b88e66857`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "fa fa-github"
  }), " GitHub")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/results"
  }, "Link")));
};
export default Login;
