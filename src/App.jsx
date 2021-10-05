
import React from "react";
import todoForm from "./form";

class App extends React.Component {
  submit = function( e ) {
    // prevent default form action from being carried out
    e.preventDefault()
    const name = document.querySelector( '#taskname' )
    const desc = document.querySelector( '#taskdesc' )
    const due = document.querySelector( '#duedate' )
          json = { taskname: name.value, taskdesc: desc.value, duedate: due.value},
          body = JSON.stringify( json )
    
    fetch( '/submit', {
      method:'POST',
      body 
    }) 
    .then( function( response ) {
      // do something with the reponse
      response.json().then(function (text) {
        var table = document.getElementById("tasktable")
        let i = text.length
        var infoRow = table.insertRow(i)
        var infoCell1 = infoRow.insertCell(0)
        var infoCell2 = infoRow.insertCell(1)
        var infoCell3 = infoRow.insertCell(2)
        var infoCell4 = infoRow.insertCell(3)
        infoCell1.innerHTML = text[i-1].taskname
        infoCell2.innerHTML = text[i-1].taskdesc
        infoCell3.innerHTML = text[i-1].duedate
        infoCell4.innerHTML = text[i-1].daysuntil
      });
    })
  
    return false
  }
  
  /*window.onload = function() {
    const button = document.querySelector( 'button' )
    button.onclick = submit
  }*/

  render() {
    return (
      <root>
        <todoForm />
        <table />
      </root>
    );
  }
}

export default App;
