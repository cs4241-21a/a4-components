import React from "../_snowpack/pkg/react.js";
const Header = (props) => {
  const loginText = props.loggedIn ? "Logout" : "Login";
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("nav", {
    class: "navbar navbar-dark bg-dark justify-content-between fixed-top"
  }, /* @__PURE__ */ React.createElement("a", {
    class: "navbar-brand",
    href: "#"
  }, "Event Itinerary"), /* @__PURE__ */ React.createElement("a", {
    class: "mr-2 text-light",
    href: "/login"
  }, loginText)));
};
export default Header;
