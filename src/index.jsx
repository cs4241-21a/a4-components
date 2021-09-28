import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Mike" />, mountNode);
ReactDOM.render(<App height="5" />, mountNode);
ReactDOM.render(<App weight="2" />, mountNode);