import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";

class App extends React.Component {

  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { appdata:[] }
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/read', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
          this.setState({ appdata:json }) 
      })
  }

  add() {
    const foodInput = document.getElementById( 'fname' )
    const calInput = document.getElementById( 'cal' )
    const servInput = document.getElementById( 'serv' )
    if(foodInput.value === "" || calInput.value === "" || servInput.value === ""){
      alert("Error: Please input all fields")
    }
    else if(calInput.value < 0 || servInput.value < 0 || isNaN(calInput.value) || isNaN(servInput.value)){
      alert("Error: Please input positive values")
    }
    else{
      const json = { fname: foodInput.value, cal: calInput.value, serv: servInput.value}

      fetch( '/add', 
      { method:'post', 
      headers: {'Content-type': 'application/json'} , 
      body: JSON.stringify( json )
      })
      .then( response => response.json())
      .then(json => { 
          this.setState({appdata:json})
      })
    }
  }

  update() {
    const foodInput = document.getElementById( 'fname2' )
    const calInput = document.getElementById( 'cal2' )
    const servInput = document.getElementById( 'serv2' )
    const index = document.getElementById( 'secret' )

    if(foodInput.value === "" || calInput.value === "" || servInput.value === ""){
      alert("Error: Please input all fields")
    }
    else if(calInput.value < 0 || servInput.value < 0 || isNaN(calInput.value) || isNaN(servInput.value)){
      alert("Error: Please input positive values")
    }
    else{
    const json = { id: index.value, fname: foodInput.value, cal: calInput.value, serv: servInput.value}

    fetch( '/update', 
    { method:'post', 
    headers: {'Content-type': 'application/json'} , 
    body: JSON.stringify( json )
  })
    .then( response => response.json())
    .then(json => { 
        this.setState({appdata:json})
    })
  }
}

  getCal = () => {
    let count = 0
      for(let i = 0; i < this.state.appdata.length; i++){
        count += this.state.appdata[i].tcal
      }
      return count
  }

  edit = (index) => {
    const name = this.state.appdata[index].fname
    const cal = this.state.appdata[index].cal
    const serv = this.state.appdata[index].serv

    document.getElementById("fname2").value = name;
    document.getElementById("cal2").value = cal;
    document.getElementById("serv2").value = serv;
    document.getElementById("secret").value = index;
  }

  delete = (index) => {
    fetch( '/delete', 
    { method:'post', 
    headers: {'Content-type': 'application/json'} , 
    body: JSON.stringify( {id: index} )
  })
  .then( response => response.json())
  .then(json => { 
        this.setState({appdata:json})
    })
  }

  render() {
    return (
      <div className = "App">
        <h1>Reactive Calorie Tracker</h1>
        <div class="flex-container">
          <div class="flex-item">
            <Form title='Add Food' 
            idlabel1='fname' label1='Food item:'
            idlabel2='cal' label2='Calories per serving:'
            idlabel3='serv' label3='Number of Servings:'
            onClick={this.add} namebtn="Submit" />
          </div>
          <div class="flex-item">
            <Form title='Update Food'
            idlabel1='fname2' label1='Food item:'
            idlabel2='cal2' label2='Calories per serving:'
            idlabel3='serv2' label3='Number of Servings:'
            onClick={this.update} namebtn="Update" />
          </div>
        </div>  
          <Table title='List of foods' tablecal={this.getCal} entries={this.state.appdata} edit={this.edit} delete={this.delete}
                  col1='Food' col2='Calories' col3='Servings' col4='Total Calories'/>
        </div>
    );
  }
}

export default App;
