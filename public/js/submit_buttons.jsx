'use strict';
import React from 'react';
import ReactDOM from "react-dom";

const e = React.createElement;
let app;

class SubmitButton extends React.Component {
    constructor(props, sBtnType) {
        super(props);
        this.state = { btnType: sBtnType };

        app=this;
    }

    render() {

        return <button onClick = { (ee) => submitToServer(this.state.btnType, ee) }>{this.state.btnType}</button>

        e(
            'button', { onClick: (ee) => submitToServer(this.state.btnType, ee) },
            'Like'
        );
    }
}

function submitToServer(btnType, ee) {
    // prevent default form action from being carried out
    ee.preventDefault();

    if (typeof(btnType) !== "string")
        return "button type is not a string";
    else if (btnType !== "Add" || btnType !== "Insert" || btnType !== "Modify" ||
        btnType !== "Remove" || btnType !== "Delete") {
        return "button type must be one of: Insert, Modify, Remove";
    }

    const input = document.querySelector("#yourname"), // gets the input field and values
        yearinput = document.getElementById("year"),
        majorinput = document.getElementById("major1"),
        secondmajorinput = document.getElementById("major2"),
        minorsinput = document.getElementById("minors"),
        hobbiesinput = document.getElementById("hobbies")

    let selectedminors = minorsinput.selectedOptions,
        selectedhobbies = hobbiesinput.selectedOptions

    let minorslist = []
    for (let i = 0; i < selectedminors.length; i++) {
        minorslist.push(selectedminors[i].value)
    }

    let hobbieslist = []
    for (let i = 0; i < selectedhobbies.length; i++) {
        hobbieslist.push(selectedhobbies[i].value)
    }

    json = {
            name: input.value,
            year: yearinput.value,
            major1: majorinput.selectedOptions[0].value,
            major2: secondmajorinput.selectedOptions[0].value,
            minors: minorslist,
            hobbies: hobbieslist
        },
        body = JSON.stringify(json) //turns the JSON into a string to be read

    if (btnType === "Insert") {
        addSubmission(body);
    } else if (btnType === "Modify") {
        modSubmission(body);
    } else if (btnType === "Remove" || btnType === "Delete") {
        return deleteSubmission(body);
    }
}

function addSubmission(body) {
    fetch("/submit", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json"
            }

        })
        .then(function(response) {
            response.text().then(function(textdata) {
                //console.log(textdata);
                console.log(JSON.parse(textdata)); // print out the parsed textdata
                let newAppdata = JSON.parse(textdata);

                console.log(newAppdata);

                constructTable(newAppdata);
            })
            console.log("response is: ")
            console.log(response)

        })

    return false
}

function modSubmission(body) {
    fetch("/modify", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json"
            }

        })
        .then(function(response) {
            response.text().then(function(textdata) {
                //console.log(textdata);
                console.log(JSON.parse(textdata)); // print out the parsed textdata
                let newAppdata = JSON.parse(textdata);

                console.log(newAppdata);

                constructTable(newAppdata);
            })
            console.log("response is: ");
            console.log(response);

        })

    return false;
}

function deleteSubmission(body) {
    fetch("/delete", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function(response) {
            response.text().then(function(textdata) {
                //console.log(textdata);
                console.log(JSON.parse(textdata)); // print out the parsed textdata
                let newAppdata = JSON.parse(textdata);

                console.log(newAppdata);

                constructTable(newAppdata);
            })
            console.log("response is: ");
            console.log(response);

        })

    return false;
}

const addBtn = document.getElementById("insertBtn");
ReactDOM.render(new SubmitButton("Insert"), addBtn);
const modBtn = document.getElementById("modBtn");
ReactDOM.render(e(new SubmitButton("Modify")), modBtn);
const delBtn = document.getElementById("delBtn");
ReactDOM.render(e(new SubmitButton("Delete")), delBtn);