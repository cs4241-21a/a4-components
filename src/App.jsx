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
    this.calculateBMI = this.calculateBMI.bind(this);
  this.weightStatus = this.weightStatus.bind(this);
    const calcbmi = 0
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
        <div class = "logo"><h1>BMI Calculator</h1></div>
        <div class = "calculator">
            <div id = "bmidisplay">{this.calcbmi}</div>
            <form id = 'bmiForm'>
              <input type='text' id='yourname' placeholder="Name" />
              <input type='number' id='weight' placeholder= "Weight(lbs)" />
              <input type='number' id='feet' placeholder="Height (Feet)" />
              <input type='number' id='inches' placeholder= "Height (Inches)" />
              <img src = "images\bmichart.png" width = "356" height = "124" alt = "BMI chart" />
              <button id="submitnew" onClick={e =>this.add(e)}>submit</button>
            </form>
          </div>
         <h1>Prior results</h1>
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
              <td><button id = 'edit'  onClick ={e => this.editEntry(this.state.entries[i], e, i)} >Edit</button></td>
              <td><button id= 'delete' onClick={e => this.deleteEntry(this.state.entries[i], e)}>Delete</button></td>
            </tr>
            ) }
          </tbody>
        </table>
      </div>
    )
  }
// when an entry is toggled, send data to server
editEntry( entry, evt, index) {
  evt.preventDefault()
  const newname = document.getElementById('yourname')
  const newfeet = document.getElementById('feet')
  const newinches = document.getElementById('inches')
  const newweight = document.getElementById('weight')
  const button = evt.target

  if (button.innerText == 'Edit') {
        button.innerText = 'Save'
        newname.value = entry.name
        newfeet.value = entry.feet
        newinches.value = entry.inches
        newweight.value = entry.weight
  }
   else if (button.innerText == 'Save') {
        const newbmi = this.calculateBMI()
        const newstatus = this.weightStatus()
        fetch( '/change', {
            method:'POST',
            body: JSON.stringify({index: index, name:newname.value, feet: parseInt(newfeet.value), inches:parseInt(newinches.value), weight: parseInt(newweight.value), bmi: newbmi, status:newstatus}),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(json => this.setState({loading: true, entries:json}))
        .catch(err => console.log(err))
        button.innerText = 'Edit'
        document.getElementById('bmiForm').reset()
        this.load() 
    }
}



// add a new entry table item
add( evt ) {
  evt.preventDefault()
  const newname = document.getElementById('yourname').value
  const newfeet = document.getElementById('feet').value
  const newinches = document.getElementById('inches').value
  const newweight = document.getElementById('weight').value
  const newbmi = this.calculateBMI()
  const newstatus = this.weightStatus()
  this.calcbmi = newbmi

  fetch( '/add', { 
    method:'POST',
    body: JSON.stringify({ name:newname, feet:parseInt(newfeet), inches: parseInt(newinches), weight: parseInt(newweight), bmi:parseInt(newbmi), status:newstatus}),
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

//Converts user given height in feet and inches to only inches
FeetToInches = function(){
  const feet = document.querySelector('#feet').value
  const inches = document.querySelector('#inches').value
  const height = 12*parseInt(feet)+ parseInt(inches)
  return height
}

//Calculates the BMI based on height in inches and weight
calculateBMI = function(){
const height = this.FeetToInches()
const weight = document.querySelector('#weight').value
const bmi = (parseFloat(weight)/height/height)*703
return bmi.toFixed(1)
}

//Finds the correct weight status based on BMI
weightStatus = function(){
  var bmi = this.calculateBMI()
  var status = ""
  if(bmi < 18.5){
      status = "Underweight"
  }
  if(bmi >= 18.5 && bmi <= 24.9){
      status = "Healthy"
  }
  if(bmi >= 25.0 && bmi <= 29.9 ){
      status = "Overweight"
  }
  if(bmi >= 30.0){
      status = "Obese"
  }
  return status;
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