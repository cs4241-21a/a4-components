
import React from "react";

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Entry extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    return <tbody>{this.props.name} : 
    
      <td><this.props.name/></td>
      <td><this.props.feet/></td>
      <td><this.props.inches/></td>
      <td><this.props.weight/></td>
      <td><this.props.bmi/></td>
      <td><this.props.status/></td>
      </tbody>
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
    fetch( '/read', { method:'get', 'no-cors':true })
    .then( response => response.json() )
      .then( json => {
         this.setState({ entries:json }) 
      })
      .catch(err => console.log(err))
  }

  // render component HTML using JSX 
  render() {
    const button = document.querySelector('button')
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Height(feet)</th>
              <th>Height(inches)</th>
              <th>Weight</th>
              <th>BMI</th>
              <th>Weight Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          { this.state.entries.map( (entry) => 
            <tr>
              <td>{entry.name}</td>
              <td>{entry.feet}</td>
              <td>{entry.inches}</td>
              <td>{entry.weight}</td>
              <td>{entry.bmi}</td>
              <td>{entry.status}</td>
              <td><button >Edit</button></td>
              <td><button >Delete</button></td>
            </tr>
            ) }
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