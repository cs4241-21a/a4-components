import React from "react";
import ReactDOM from "react-dom";
import CompletedTasks from "./CompletedTasks";
import Tasks from "./Tasks";

var mountNode = document.getElementById("main-tbody")
var mountNodeCompleted = document.getElementById("completed-tbody")
ReactDOM.render(<Tasks />, mountNode)
ReactDOM.render(<CompletedTasks />, mountNodeCompleted)