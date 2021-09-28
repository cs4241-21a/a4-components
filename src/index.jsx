import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Mike" feet="5" inches="2" weight="160" bmi="30.2" status="Overweight"/>, mountNode);