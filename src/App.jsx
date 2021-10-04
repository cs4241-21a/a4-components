
import React from "react";

class App extends React.Component {
  render() {
   
    return (
      <>
       <h1 >Chore Log</h1>
       <DataTable></DataTable>
       <p>Add new row:</p>
       <form>
      <input type='text' id='name' placeholder="name here"/>
      <input type='text' id='chore' placeholder="chore here"/>
      <input type='text' id='complete' placeholder="complete or not"/>
      <button id = 'submit' onClick={submit}>Add</button>
      <p>Edit existing row:</p>
      <input type='text' id='modDel' placeholder="0"/>
     
      <button id = 'modify' onClick={modify}>Modify</button>
    
      <button id = 'delete' onClick={deleting}>Delete</button>
      </form>
      </>
    );
  }
}

class DataTable extends React.Component {
  constructor() {
    super();
    
  }


  renderAllRows(){
    return (
      <tr> 
          <td> {JSON.parse().id} </td>
          <td> JSON.parse().name </td>
          <td> JSON.parse().chore </td>
          <td> JSON.parse().complete </td>
          <td>  JSON.parse().load </td> 
      </tr>
    );
  }

  render() {
  
    return (
      <table>
        <tr id='headers'>
          <th>Item #</th>
          <th>Assigned To</th>
          <th>Task</th>
          <th>Status</th>
          <th>Tasks Assigned</th>
        </tr>  

      </table>
    );
  }
}

//----------------------------------------------------------------------------------------

let dataarray = []


  //function submit(e) {
  const submit = function( e ) {
    // prevent default form action from being carried out*/
    e.preventDefault()

    const inputName = document.querySelector( '#name' )
    const inputChore = document.querySelector( '#chore' )
    const inputComplete = document.querySelector( '#complete' )

    if(inputName.value === "" || inputChore.value === "" || inputComplete.value === ""){
      return false;
    }

          let json = {name: inputName.value, chore: inputChore.value , complete:inputComplete.value, load:0, id:-1}
          let body = JSON.stringify( json )

console.log("send submit")

          /*fetch( '/submit', {
      method:'POST',
      body 
    })*/
    fetch( '/submit', {
      method:'POST',
      body: body,
      headers: {"Content-Type": "application/json"} 
    })
    .then(function( response ) {
         return response.json();
    })
    .then (function(json){

      
      let newAppdata = []
      for(let i = 0; i<json.length; i++){
        //let obj = json[i]
        
      
       
        newAppdata.push(JSON.parse(json[i]))
         
      }

      dataarray = newAppdata
    });
    return false
  };

  const modify = function( e ) {
    // prevent default form action from being carried out
    e.preventDefault()


    const inputName = document.querySelector( '#name' )
    const inputChore = document.querySelector( '#chore' )
    const inputComplete = document.querySelector( '#complete' )
    const inputId = document.querySelector( '#modDel' )

    if(inputName.value === "" || inputChore.value === "" || inputComplete.value === "" || inputId.value === ""){
      return false;
    }

    if(isNaN(inputId.value)){
      return false;
    }
    else if(inputId.value.includes(".")){//decimal
      return false;
    }
    else if(parseInt(inputId.value) < 0){
      return false;
    }
    

          let json = {name: inputName.value, chore: inputChore.value , complete:inputComplete.value, load:0, id:inputId.value}
          let body = JSON.stringify( json )

          fetch( '/submit', {
      method:'POST',
      body 
    })
    .then(function( response ) {
         return response.json();
    })
    .then (function(json){


      if(json.length > 0){
        if(JSON.parse(json[0]).load == -1){
          return false;
        }
      }

      /*let htmlStr = "<tr id='headers'><th>Item #</th><th>Assigned To</th><th>Task</th><th>Status</th><th>Tasks Assigned</th></tr>"//header row 
      for(let i = 0; i<json.length; i++){
        //let obj = json[i]
        
        
        htmlStr = htmlStr + "<tr>" 
          + "<td>" + JSON.parse(json[i]).id + "</td>"
          + "<td>" + JSON.parse(json[i]).name + "</td>"
          + "<td>" + JSON.parse(json[i]).chore + "</td>"
          + "<td>" + JSON.parse(json[i]).complete + "</td>"
          + "<td>" + JSON.parse(json[i]).load + "</td>" 
          + "</tr>"
      }

      let theTable= document.getElementById('table')
      theTable.innerHTML = htmlStr*/
    });
    return false
  };

  const deleting = function( e ) {
    // prevent default form action from being carried out
    e.preventDefault()

    console.log( "response" )

    const inputId = document.querySelector( '#modDel' )
    if(inputId.value === ""){
      return false;
    }

    if(isNaN(inputId.value)){
      return false;
    }
    else if(inputId.value.includes(".")){//decimal
      return false;
    }
    else if(parseInt(inputId.value) < 0){
      return false;
    }
    
         let json = {name: "n/a", chore: "n/a" , complete:"n/a", load:-1, id:parseInt(inputId.value)}
         let body = JSON.stringify( json )

          fetch( '/submit', {
      method:'POST',
      body 
    })
    .then(function( response ) {
         return response.json();
    })
    .then (function(json){

      /*if(json.length > 0){
        if(JSON.parse(json[0]).load == -1){
          return false;
        }
      }


      let htmlStr = "<tr id='headers'><th>Item #</th><th>Assigned To</th><th>Task</th><th>Status</th><th>Tasks Assigned</th></tr>"//header row 
      for(let i = 0; i<json.length; i++){
        //let obj = json[i]
        
      
        htmlStr = htmlStr + "<tr>" 
          + "<td>" + JSON.parse(json[i]).id + "</td>"
          + "<td>" + JSON.parse(json[i]).name + "</td>"
          + "<td>" + JSON.parse(json[i]).chore + "</td>"
          + "<td>" + JSON.parse(json[i]).complete + "</td>"
          + "<td>" + JSON.parse(json[i]).load + "</td>" 
          + "</tr>"
      }

      let theTable= document.getElementById('table')
      theTable.innerHTML = htmlStr*/
    });
    return false
  };

  window.onload = function() {

    /*
    const subbutton = document.querySelector( '#submit' )
    subbutton.onclick = submit
    const modbutton = document.querySelector( '#modify' )
    modbutton.onclick = modify
    const delbutton = document.querySelector( '#delete' )//delete not allowed
    delbutton.onclick = deleting*/
  }

//----------------------------------------------------------------------------------------
export default App;
