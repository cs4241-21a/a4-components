import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./Tasks";

const taskContainer = document.getElementById( "tasklist-container" )
ReactDOM.render(<Tasks/>, taskContainer);
