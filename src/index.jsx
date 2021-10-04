import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Register from "./Register";

let loginNode = document.getElementById("login");
ReactDOM.render(<Login/>, loginNode);

let registerNode = document.getElementById("register");
ReactDOM.render(<Register/>, registerNode);