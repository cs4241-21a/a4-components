
import React from "react";

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Entry extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return <tr>{this.props.name, this.props.feet, this.props.inches, this.props.weight, this.props.bmi, this.props.status} : 
      <td><this.props.name/></td>
      <td><this.props.feet/></td>
      <td><this.props.inches/></td>
      <td><this.props.weight/></td>
      <td><this.props.bmi/></td>
      <td><this.props.status/></td>
    </tr>
  }
  // call this method when the checkbox for this component is clicked
  // change(e) {
  //   this.props.onclick( this.props.name, e.target.checked )
  // }
}

// main component
class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { entries:[] }
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/read', { method:'GET', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
         this.setState({ entries:json }) 
      })
  }

  // render component HTML using JSX 
  render() {
    return (
      <div className="App">
        <table id="results">
          <tbody>
        <tr>
          { this.state.entries.map( (todo,i) => <Entry key={i} name={entries.name} feet={entries.feet} inches={entries.inches} weight={entries.weight} bmi={entries.bmi} status={entries.status} onclick={ this.toggle } /> ) }
       </tr> 
       </tbody>
       </table>
      </div>
    )
  }
// when an entry is toggled, send data to server
toggle( name, feet, inches, weight, bmi, status ) {
  fetch( '/change', {
    method:'POST',
    body: JSON.stringify({ name, feet, inches, weight, bmi, status }),
    headers: { 'Content-Type': 'application/json' }
  })
}

// add a new entry table item
add( evt ) {
  const newname = document.querySelector('yourname').value
  const newfeet = document.querySelector('feet').value
  const newinches = document.querySelector('inches').value
  const newweight = document.querySelector('weight').value

  fetch( '/add', { 
    method:'POST',
    body: JSON.stringify({ name:newname, feet:newfeet, inches: newinches, weight: newweight}),
    headers: { 'Content-Type': 'application/json' }
  })
  .then( response => response.json() )
  .then( json => {
     // changing state triggers reactive behaviors
     this.setState({ entries:json }) 
  })
}
}


// class App extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h1>
//           Hello {name}
//         </h1>
//       </>
//     );
//   }
// }

export default App;