import React from 'react';
import icon from './icon.png';
import './App.css';

// we could place this Todo component in a separate file, but it's
// small enough to alternatively just include it in our App.js file.

class Servant extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    // return <li>{this.props.name} : 
    //   <input type="checkbox" defaultChecked={this.props.completed} onChange={ e => this.change(e) }/>
    // </li>
    return <tr><td>{this.props.name}</td>
                <td>{this.props.occupation}</td>
                <td>{this.props.strength}</td>
                <td>{this.props.endurance}</td>
                <td>{this.props.agility}</td>
                <td>{this.props.magic}</td>
                <td>{this.props.luck}</td>
                <td>{this.props.noble}</td>
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
    this.state = { servants:[] }
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/read', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
         this.setState({ servants:json }) 
      })
  }

  // render component HTML using JSX 
  render() {
    return (
    <div className="App">
      <h1>Fate Servant Generator</h1>
      <p2>Note: All attributes (EX ~ E) are generated randomly based on occupation chosen</p2><br></br>
      <p2>eg: Saber occupation will be more likely to generate high attribute (EX, A++) in Strength</p2><br></br><br></br>
      <img src={icon} className = 'App-icon' alt="icon" width="344" height="282" />
      
      <hr></hr>
      <strong>Add Servant information</strong><br></br><br></br>
      <strong>Character Name: </strong><br></br><br></br>
      <input id='name' type='text' /><br></br><br></br>

      <strong>Character Occupation (Saber, Lancer, Archer, Caster, Rider, Assassin): </strong><br></br><br></br> 
      <input id='occupation' type='text' /><br></br><br></br>

      <button className='addb' onClick={ e => this.add( e )}>add</button><br></br><br></br><hr></hr>

      <strong>Servants Table: </strong><br></br><br></br>
      <table className="App-table" width='100%' border='1'>
        <tbody>
          <tr><th>Name</th><th>Ocuupation</th><th>Strength</th><th>Endurance</th><th>Agility</th><th>Magical Power</th><th>Good Luck</th><th>Noble Phantasm</th></tr>
          { this.state.servants.map( (servent,i) => <Servant key={i} name={servent.name} occupation={servent.occupation} strength={servent.strength} endurance={servent.endurance} agility={servent.agility} magic={servent.magic} luck={servent.luck} noble={servent.noble}/> ) }
        </tbody>
      </table>

        {/* <ul>
          { this.state.servants.map( (servent,i) => <Servant key={i} name={servent.name} completed={servent.completed} onclick={ this.toggle } /> ) }
       </ul>  */}
    </div>
    )
  }

  // toggle( name, completed ) {
  //   fetch( '/change', {
  //     method:'POST',
  //     body: JSON.stringify({ name, completed }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  // }
 
  // add a new todo list item
  add( evt ) {
    const servantname = document.querySelector('#name').value
    const servantoccupation = document.querySelector('#occupation').value

    if(servantname === ""){
      alert("Cannot enter null name!!")
    }
    else if(servantoccupation != "Saber" && servantoccupation != "Lancer" && servantoccupation != "Archer" && servantoccupation != "Caster" && servantoccupation != "Rider" && servantoccupation != "Assassin"){
      alert("The entered occupation does not exist!!")
    }
    else{
      fetch( '/add', { 
        method:'POST',
        body: JSON.stringify({ name:servantname, occupation:servantoccupation }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then( response => response.json() )
      .then( json => {
         // changing state triggers reactive behaviors
         this.setState({ servants:json }) 
      })
    }
  }
}

export default App;