import React from 'react';

class Contact extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return <li>{this.props.name} | {this.props.phoneNum} | {this.props.birthday} | {this.props.toGift} | {this.props.giftBy }</li>
  }
}

// main component
class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { todos:[] }
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/read', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
        this.setState({ todos:json }) 
      })
  }

  // render component HTML using JSX 
  render() {
    return (
      <div className="App">      
      <label for ="name">Name:</label>
      <input type='text' id='name' placeholder="Name"></input>

      <label for ="phoneNum">Phone number:</label>
      <input type='tel' id='phoneNum' placeholder="012-345-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  required></input>

      <label for='birthday'>Birthday:</label>
      <input type="date" id="birthday"></input>

      <label for ="toGift">Gift:</label>
      <input type="checkbox" id="toGift"></input>

      <button id = 'submit' onClick={ e => this.add( e )}>Submit</button>
      <button id = 'delete' onClick={ e => this.delete(e)}>Delete</button>

      <ul>Name | Phone Number | Birthday | To buy a gift? | If so, buy gift by...</ul>
      <ul>
        { this.state.todos.map( (todo,i) => <Contact key={i} name={todo.name} phoneNum = {todo.phoneNum} birthday = {todo.birthday} toGift = {todo.toGift} giftBy = {todo.giftBy}/> ) }
      </ul> 
      </div>
    )
  }

  //Add another entry 
  add( evt ) {
    const name = document.querySelector('#name').value
    const phone = document.querySelector('#phoneNum').value
    const birthday = document.querySelector('#birthday').value
    let toGift = "no"
    if(document.querySelector('#toGift').checked){
        toGift = "yes"
    }
    

    fetch( '/add', { 
      method:'POST',
      body: JSON.stringify({ name:name, phoneNum:phone, birthday:birthday, toGift:toGift}),
      headers: { 'Content-Type': 'application/json' }
    })
    .then( response => response.json() )
    .then( json => {
       // changing state triggers reactive behaviors
       console.log(json)
       this.setState({ todos:json }) 
    })
  }

  //Delete the entry
  delete(evt){
    const name = document.querySelector('#name').value
    fetch( '/delete', { 
      method:'POST',
      body: JSON.stringify({ name:name}),
      headers: { 'Content-Type': 'application/json' }
    })
    .then( response => response.json() )
    .then( json => {
       // changing state triggers reactive behaviors
       this.setState({ todos:json }) 
    })
  }
}

export default App;



