
import React from "react";

class App extends React.Component {
  render() {
   
    return (
      <>
       <h1 >Chore Log</h1>
       <DataTable></DataTable>
      
      </>
    );
  }
}

class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {dataarray:[]}
    console.log(this.state)

    this.submit = this.submit.bind(this);
    this.modify = this.modify.bind(this);
    this.deleting = this.deleting.bind(this);
  }


  renderARow(rowjson){

    console.log(rowjson)

    return (
      <tr> 
          <td> {(rowjson).id} </td>
          <td> {(rowjson).name} </td>
          <td> {(rowjson).chore} </td>
          <td> {(rowjson).complete} </td>
          <td>  {(rowjson).load} </td> 
      </tr>
    );
  }

  render() {
  
    return (
      <>
      <table>
        <tr id='headers'>
          <th>Item #</th>
          <th>Assigned To</th>
          <th>Task</th>
          <th>Status</th>
          <th>Tasks Assigned</th>
        </tr>  
        {this.state.dataarray ? this.state.dataarray.map(this.renderARow) : <></>}
      </table>

      <p>Add new row:</p>
       <form>
      <input type='text' id='name' placeholder="name here"/>
      <input type='text' id='chore' placeholder="chore here"/>
      <input type='text' id='complete' placeholder="complete or not"/>
      <button id = 'submit' onClick={this.submit}>Add</button>
      <p>Edit existing row:</p>
      <input type='text' id='modDel' placeholder="0"/>
     
      <button id = 'modify' onClick={this.modify}>Modify</button>
    
      <button id = 'delete' onClick={this.deleting}>Delete</button>
      </form>
      </>
    );
  }

  //----------------------------------------------------------------------------------------

//let dataarray = []


  //function submit(e) {
     submit = ( e ) => {
       
      // prevent default form action from being carried out
      e.preventDefault()
  
      const inputName = document.querySelector( '#name' )
      const inputChore = document.querySelector( '#chore' )
      const inputComplete = document.querySelector( '#complete' )
  
      if(inputName.value === "" || inputChore.value === "" || inputComplete.value === ""){
        return false;
      }
  
            let json = {"name": inputName.value, "chore": inputChore.value , "complete":inputComplete.value, "load":0, "id":-1}
            let body = JSON.stringify( json )
  
  console.log(body)
  
            /*fetch( '/submit', {
        method:'POST',
        body 
      })*/
      fetch( '/submit', {
        method:'POST',
        body: body,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
      .then(function( response ) {
          
     
           return response.json()
      }.bind(this))
      .then (function(json){
        
        console.log("hit resp2")
        console.log(this.state)

        let newAppdata = []
        for(let i = 0; i<json.length; i++){
          //let obj = json[i]
      
          newAppdata.push(JSON.parse(json[i]))
           
        }
  
        this.setState({dataarray: newAppdata})
      }.bind(this));
      return false
    };
  
     modify = function( e ) {
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
  
            console.log(body)
            
                      /*fetch( '/submit', {
                  method:'POST',
                  body 
                })*/
                fetch( '/submit', {
                  method:'POST',
                  body: body,
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                })
                .then(function( response ) {
                    
               
                     return response.json()
                }.bind(this))
                .then (function(json){
                  
                  console.log("hit resp2")
                  console.log(this.state)
          
                  let newAppdata = []
                  for(let i = 0; i<json.length; i++){
                    //let obj = json[i]
                
                    newAppdata.push(JSON.parse(json[i]))
                     
                  }
            
                  this.setState({dataarray: newAppdata})
                }.bind(this));
                return false
              };
  
     deleting = function( e ) {
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
  
  console.log(body)
  
            /*fetch( '/submit', {
        method:'POST',
        body 
      })*/
      fetch( '/submit', {
        method:'POST',
        body: body,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
      .then(function( response ) {
          
     
           return response.json()
      }.bind(this))
      .then (function(json){
        
        console.log("hit resp2")
        console.log(this.state)

        let newAppdata = []
        for(let i = 0; i<json.length; i++){
          //let obj = json[i]
      
          newAppdata.push(JSON.parse(json[i]))
           
        }
  
        this.setState({dataarray: newAppdata})
      }.bind(this));
      return false
    };
  
   
  
  //----------------------------------------------------------------------------------------
}


export default App;
