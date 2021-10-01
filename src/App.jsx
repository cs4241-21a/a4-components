import React from "react";


// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

/* class Entry extends React.Component {
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
} */

// main component
class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { loading: true, entries:[] }
   this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/read', { method:'GET', 'no-cors':true })
    .then( response => response.json() )
      .then( json => {
         this.setState({ loading: false, entries:json })
      })
     // .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  // render component HTML using JSX 
  render() {
   // console.log(this.state)
    return (
      <div className='App'>
         <button id="submitnew" onClick={e =>this.add(e)}>submit</button>
        <table id='results'>
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
          { this.state.entries.map( (entry, i) => 
            <tr key = {i}>
              <td>{entry.name}</td>
              <td>{entry.feet}</td>
              <td>{entry.inches}</td>
              <td>{entry.weight}</td>
              <td>{entry.bmi}</td>
              <td>{entry.status}</td>
              <td><button id = "edit + {i}"  onClick ={e => this.editEntry(entry, i)} >Edit</button></td>
              <td><button id= {i} onClick={e => this.deleteEntry(this.state.entries[i], e)}>Delete</button></td>
            </tr>
            ) }
          </tbody>
        </table>
      </div>
    )
  }
// when an entry is toggled, send data to server
editEntry( entry, index) {
  const newname = document.getElementById('yourname')
  const newfeet = document.getElementById('feet')
  const newinches = document.getElementById('inches')
  const newweight = document.getElementById('weight')
  const button = document.getElementById('edit')

  newname.value = entry.name
  newfeet.value = entry.feet
  newinches.value = entry.inches
  newweight.value = entry.weight
  button.innerHTML = 'Save'

  button.onclick = function(){

  fetch( '/change', {
    method:'POST',
    body: JSON.stringify({index: index, name:newname.value, feet: newfeet.value, inches:newinches.value, weight: newweight.value, bmi:'0', status:'Healthy'}),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(json => {
    this.setState({entries:json})
  })
  button.innerHTML = 'Edit'
}
this.load()
 
}


// add a new entry table item
add( evt ) {
  evt.preventDefault()
  const newname = document.getElementById('yourname').value
  const newfeet = document.getElementById('feet').value
  const newinches = document.getElementById('inches').value
  const newweight = document.getElementById('weight').value

  fetch( '/add', { 
    method:'POST',
    body: JSON.stringify({ name:newname, feet:newfeet, inches: newinches, weight: newweight, bmi:0, status:"Healthy"}),
    headers: { 'Content-Type': 'application/json' }
  })
  .then( response => response.json() )
  .then( json => {
     // changing state triggers reactive behaviors
     this.setState({ entries:json }) 
  })
}

deleteEntry(entry, e) {
 e.preventDefault()
  fetch('/delete', {
    method:'POST',
    body: JSON.stringify({index: e.target.id, name: entry.name, feet: entry.feet, inches: entry.inches, bmi: entry.bmi, status: entry.status}),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(json => {
    this.setState({loading: true, entries: json})
  })
  this.load()
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