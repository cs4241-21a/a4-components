import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import Tables from "./Tables.js";
let mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), mountNode);
let mountNode2 = document.getElementById("tables");
ReactDOM.render(/* @__PURE__ */ React.createElement(Tables, null), mountNode2);
