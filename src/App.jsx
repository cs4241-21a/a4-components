import React from 'react';

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Todo extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return <li>{this.props.descrip} {this.props.expectedTime} {this.props.dueDate} {this.props.DueDate}: 
      <button onClick = {e => this.onEdit(e)}>Edit</button>
      <button onClick = {e => this.onDelete(e)}>Delete</button>
    </li>
  }
  // call this method when the checkbox for this component is clicked
  onEdit(e) {
    this.props.edit(this.props.descrip, document.querySelector('#descrip').value, document.querySelector('#expectedTime').value, document.querySelector('#dueDate').value )
  }

  onDelete(e) {
    this.props.delete(this.props.descrip, this.props.expectedTime, this.props.dueDate)
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
      <input type='text' id='descrip' onChange={this.props._change}></input>
      <input type='text' id='expectedTime' onChange={this.props._change}></input>
      <input type='datetime-local' id='dueDate' onChange={this.props._change}></input>
      <button onClick={ e => this.add( e )}>add</button>
        <ul>
          { this.state.todos.map( (todo,i) => <Todo key={i} descrip={todo.descrip} expectedTime={todo.expectedTime} dueDate={todo.dueDate} edit={ (oldDesc, descrip, expectedTime, dueDate) => this.Edit(oldDesc, descrip, expectedTime, dueDate)} delete={ (d, e, dd) => this.Delete(d, e, dd)} /> ) }
       </ul> 
      </div>
    )
  }

  _Change(event, value){
    event.target.value = value
  }

   // when an Todo is toggled, send data to server
   Edit( oldDesc, descrip, expectedTime, dueDate ) {
    fetch( '/change', {
      method:'POST',
      body: JSON.stringify({ oldDesc, descrip, expectedTime, dueDate }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then( response => response.json() )
    .then( json => {
       // changing state triggers reactive behaviors
       this.setState({ todos:json })  
    })
  }

  Delete( descrip, expectedTime, dueDate ) {
    fetch( '/delete', {
      method:'POST',
      body: JSON.stringify({ descrip, expectedTime, dueDate }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then( response => response.json() )
    .then( json => {
       // changing state triggers reactive behaviors
       this.setState({ todos:json })  
    })
  }
 
  // add a new todo list item
  add( evt ) {
    const descrip = document.querySelector('#descrip').value,
          expectedTime = document.querySelector('#expectedTime').value,
          dueDate = document.querySelector('#dueDate').value

    fetch( '/add', { 
      method:'POST',
      body: JSON.stringify({ descrip, expectedTime, dueDate }),
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