import React from 'react';

class Record extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return <tr>
      <td>{this.props.entertainment}</td>
      <td>{this.props.food}</td>
      <td>{this.props.other}</td>
      <td>{this.props.total}</td>
      <td>{this.props.date}</td>
    </tr>
  }
}

// main component
class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
   // this.state = { todos:[] }
    this.state = {records:[]}
    this.load()
    this.add = this.add.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <table id="expenseTable" class="center">
    <caption>Daily Expense</caption>
    <thead>
    <tr>
      <th>Entertainment</th>
      <th>food</th>
      <th>other</th>
      <th>total</th>
      <th>date</th>
    </tr>
    </thead>
    <tbody>
    { this.state.records.map( (record,i) => <Record _id={i} entertainment={record.entertainment} food={record.food} other={record.other} total={record.total} date={record.date} /> ) }
    </tbody>
    </table>
  <div class="center">
    <p>
      Use this table to help you be better manage your money
    </p>
  </div>
  <div id="BtnContainer" class="center flex-container">
  </div>
  
  <div id="addDiv" class="form-popup center" >
    <form id="addForm" class="form-container">
      <h1>add a daily record</h1>
      <div>
        <label for="entertainment"><b> Entertainment :</b> </label>
        <input type='text' id='entertainment' placeholder="game, sports equipment, etc" />
      </div>
      <div>
        <label for="food"> <b>food expense :</b>  </label>
        <input type='text' id='food' placeholder="include drinks" />
      </div>
      <div>
        <label for="other"><b>Other :</b>  </label>
        <input type='text' id='other' placeholder="commute, online shop, etc"/>
      </div>
  
      <button id="addNewRecord" type="submit" class="btn" onclick={
    this.add}>Add</button>
    </form>
  </div>
  
  
      </div>
    )
  }
  
  load() {
    fetch( '/load', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
         this.setState({ records:json }) 
      })
  }
  
  add(){
    
    let body = {}

    body.entertainment = document.getElementById('entertainment').value
    body.food = document.getElementById('food').value
    body.other = document.getElementById('other').value

    console.log(body)
    debugger
    body = JSON.stringify(body)
    alert(body)
    console.log(body)
    fetch( '/add', {
      method:'post',
      headers:{"content-type": "application/json"},
      body:body
    })
            .then( function( response ) {
              // do something with the response
              return response.json()
            })
            .then(function(json){
              alert(json)
              this.setState({ records:json }) 
            })
  }
}

export default App;