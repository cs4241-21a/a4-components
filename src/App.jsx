import React from 'react';
import './styles.css';
//DONT FORGET THE FONT

class TableRow extends React.Component {
  render(){
    return <tr>
      <td>{this.props.name}</td>
      <td>{this.props.val1}</td>
      <td>{this.props.val2}</td>
      <td>{this.props.op}</td>
      <td>{this.props.result}</td>
    </tr>
  }
}

// main component
class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
    this.convert = this.convert.bind(this);
    //this.submit = this.submit.bind(this);
    this.state = {comps:[]}
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/read', { method:'get', 'no-cors':true })
      .then( response => response.json() )
      .then( json => {
         this.setState({ comps:json }) 
      }) 
  }
  
  // render component HTML using JSX 
  render() {
    return (
      <div className="App">      
      <div class = "flex-container">
        <div id = "titles">
          <h1>The Lame Calculator</h1>
          <h2>Somehow still a better deal than TI calculators™</h2>
          <h3>Collaborative Computing, done wrong©</h3>
        </div>
        <p>Enter a valid number in the boxes along with an operator, then press compute to perform the designed operation on those numbers. Results are sorted with most recent appearing at the top for convenience. </p>
        <p id = "warning">WARNING: DO NOT ATTEMPT TO COMMUNICATE WITH CALCULATOR IN BINARY VIA COMPUTATION. IGNORE ALL SECRET RESPONSES.</p>
        <div class = "flex-container" id = "computeform">
          <form>
            <input type="number" class="fvalue" id="value1"/>
            <input type="text" class ="foperator" id ="operator"/>
            <input type="number" class="fvalue" id="value2"/>
            <button id ="compute" onClick={ e => this.submit(e)} >compute</button>
          </form>
        </div>
        <div id = "notesandconvert" class = "flex-container">
          <div>
            <p>Notes:</p>
            <ul>
              <li>Supported operations are +, -, *, /, and ^.</li>
              <li>Whitespace is supported within numbers, but NOT by the binary parser.</li>
              <li>01110100 01110010 01111001 00100000 01110100 01100101 01110011 01110100</li>
            </ul>
          </div>
          <div>
            <p>The "convert" button converts text to the decimal equivalent of the text's binary representation. Use this to avoid accidentally communicating with the calculator by having your computation result be the decimal equivalent of some binary phrase.</p>
            <input type = "text" id ="bintext"/>
            <input id="bintextconv"/>
            <button id = "convert" onClick = {this.convert}>convert</button>
            <p id = "convertedtext"></p>
          </div>
        </div>
        <div class = "flex-container" id ="tablecontainer">
          <table id = "table">
            <colgroup>
              <col span = "1" style = {{width: "30%"}}/>
              <col span = "1" style = {{width: "20%"}}/>
              <col span = "1" style = {{width: "20%"}}/>
              <col span = "1" style = {{width: "5%"}}/>
              <col span = "1" style = {{width: "25%"}}/>
            </colgroup>
            <tbody>
            <tr>
              <th>Computation Number</th>
              <th>Var 1</th>
              <th>Var 2</th>
              <th>Op.</th>
              <th>Result</th>
            </tr>
            {/* as ugly as this is, it's to preserve the fact that in A2 results were sorted in reverse order, normally I'd just set it to (comp).(value) */}
            {this.state.comps.map( (comp,i) =>
            <TableRow val1={this.state.comps[this.state.comps.length-1-i].x}
            val2={this.state.comps[this.state.comps.length-1-i].y}
            op={this.state.comps[this.state.comps.length-1-i].o}
            name = {this.state.comps[this.state.comps.length-1-i].name}
            result = {this.state.comps[this.state.comps.length-1-i].result} /> ) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
  }
    //convert text to decimal equivalent of its binary representation
    convert(){
      let input = document.getElementById("bintext").value.toLowerCase();
      let output = "";
      for (var i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
      }
      document.getElementById("bintextconv").value = parseInt(output.split(" ").join(""), 2);
    }

    //submit a computation to the server
    submit(e){
      // prevent default form action from being carried out
      e.preventDefault()
  
      let val1 = document.getElementById("value1").value;
      let val2 = document.getElementById("value2").value;
      const op = document.getElementById("operator").value;
      val1 = val1.replace(/\s+/g, ''); //remove all whitespace
      val2 = val2.replace(/\s+/g, '');
      if (isNaN(val1) || isNaN(val2) || val1 === "" || val2 ===""){
        alert("Must input numbers");
      }
      else if (op.match(/^[-+/^*]/) === null){
        alert("Must input valid operator (+, -, *, /, ^)");
      }
      else{
        let json = {x: val1, y: val2, o: op}
        let body = JSON.stringify(json)
        fetch('/submit', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
      })
        .then( response => response.json() )
        .then( json => {
           // changing state triggers reactive behaviors
           this.setState({ comps:json }) 
        })
      }
    }
    
}

export default App;