import './App.css';
import React from "react";
import {render} from "@testing-library/react";

// function App() {
//   return (
//     <div className="App">
//       {/*<header className="App-header">*/}
//       {/*  <img src={logo} className="App-logo" alt="logo" />*/}
//       {/*  <p>*/}
//       {/*    Edit <code>src/App.js</code> and save to reload.*/}
//       {/*  </p>*/}
//       {/*  <a*/}
//       {/*    className="App-link"*/}
//       {/*    href="https://reactjs.org"*/}
//       {/*    target="_blank"*/}
//       {/*    rel="noopener noreferrer"*/}
//       {/*  >*/}
//       {/*    Learn React*/}
//       {/*  </a>*/}
//       {/*  <p>Hello, this is cool</p>*/}
//       {/*</header>*/}
//
//
//       <header>
//         <form>
//           <label>Name:</label>
//           <input type="text" id="inputName" style ={{width: "100%"}} placeholder="Jane Doe"/>
//           <br/>
//           <label>Message Color:</label>
//           <input type="color" id="inputColor" value="#FF55FF"/>
//           <br/>
//           <label>Message:</label>
//           <br/>
//           <textarea id="inputMessage" placeholder="Sometimes all you need is a little splash of color"></textarea>
//           <br/>
//           <button className="header-btn">Send</button>
//         </form>
//       </header>
//     </div>
//   );
// }

class Message extends React.Component {
  // our .render() method creates a block of HTML using the .jsx format
  render() {
    const messageStyle = {
      backgroundColor: this.props.color
    };
    return (
        <message style={messageStyle}>
          <h3>{this.props.name}</h3>
          <p>{this.props.message}</p>
        </message>
    );
  }
}

class App extends React.Component {
  constructor( props ) {
    super( props )
    // initialize our state
    this.state = { messages:[] }
    this.load()
  }

  // load in our data from the server
  load() {
    fetch( '/messages', { method:'get', 'no-cors':true })
        .then( response => response.json() )
        .then( json => {
          this.setState({ messages:json })
        })
  }

  //send data to the server
  send(event){
    const name = document.getElementById( "inputName" ),
        color = document.getElementById("inputColor"),
        message = document.getElementById("inputMessage"),
        json = { name: name.value, color: color.value, message: message.value },
        body = JSON.stringify( json )

    console.log("Sending the following to the server: " + body)

    fetch( '/submit', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
  }).then( function( response ) {
    console.log("Got a response: " + response.status)
      if (response.ok){
        //Clear message box
        document.getElementById("inputMessage").value = ""
        return response.json()
      }else {
        return false
      }
    })
  }

  // render component HTML using JSX
  render() {
    return (
        <div className="App" id="main">
          <header>
            <form>
              <label>Name:</label>
              <input type="text" id="inputName" style ={{width: "100%"}} placeholder="Jane Doe"/>
              <br/>
              <label>Message Color:</label>
              <input type="color" id="inputColor" value="#FF55FF"/>
              <br/>
              <label>Message:</label>
              <br/>
              <textarea id="inputMessage" placeholder="Sometimes all you need is a little splash of color"></textarea>
              <br/>
              <button className="header-btn" onClick={e => this.send(e)}>Send</button>
            </form>
          </header>

          {/*<input type='text' /><button onClick={ e => this.add( e )}>add</button>*/}

          { this.state.messages.map( (message,i) => <Message key={i} name={message.name} color={message.color} message={message.message} /> ) }
        </div>
    )
  }
}

export default App;
