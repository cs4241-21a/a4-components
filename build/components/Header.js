import React from "../_snowpack/pkg/react.js";
import LogoutButton from "./LogoutButton.js";
const Header = () => {
  return /* @__PURE__ */ React.createElement("header", {
    class: "flex py-3 bg-gray-900 w-full"
  }, /* @__PURE__ */ React.createElement("h1", {
    class: "pl-5 text-5xl float-left",
    id: "title"
  }, "Race Results"), /* @__PURE__ */ React.createElement(LogoutButton, null));
};
export default Header;
