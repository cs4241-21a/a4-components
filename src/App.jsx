import React from 'react';
import './style.css';

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Todo extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return <li>
      {this.props.yourname + this.props.birth + this.props.cur} 
    </li>

    
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
               <h1 class = "spacious flex-container">Information about Internet Lurkers in The Database</h1>
<table><tr>
  <th>Names:</th>
  <th>Birth Years:</th>
  <th>Year Timestamps:</th>
  <th>Age Timestamps:</th>
  </tr>
<tr>
<td> yourName</td>
<td> 1111</td>
<td> 2222</td>
<td> 1111</td></tr>
</table>
        <form action="">
      <input type='text' id='yourname' defaultValue="your name here"/>
      <input type='text' id='birth' defaultValue="your birth year"/>
      <input type='text' id='cur' defaultValue="current year"/>
      <button onClick={ e => this.add( e )}>add</button>
      </form>
        <ul>
          { this.state.todos.map( (todo,i) => <Todo key={i} yourname={todo.yourname} birth={todo.birth} cur={todo.cur} /> ) }
       </ul> 
      </div>
    )
  }
 
  // add a new todo list item
  add( evt ) {
    const valueName = document.getElementById('yourname').value
    const valueBirth = document.getElementById('birth').value
    const valueCur = document.getElementById('cur').value


    fetch( '/add', { 
      method:'POST',
      body: JSON.stringify({ yourname:valueName, birth:valueBirth, cur:valueCur,}),
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
