
import React from "react";
import LoginComponent from "./components/LoginComponent"
import LostFoundComponent from "./components/LostFoundComponent"
import { getRequest } from "./requests-helper"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: false };
    this.isAuthenticated()
  }

  isAuthenticated() {
    getRequest('/auth/getUserID', {}, (response) => {
      console.log("Login status: " + response.status)
      if (response.status == 200) {
        this.setState({ authenticated: true, username: response.username })
      } else {
        this.setState({ authenticated: false })
      }
    })
  }

  render() {
    if (this.state.authenticated) {
      return (
        <>
          <LostFoundComponent username={ this.state.username } />
        </>
      );
    } else {
      return (
        <>
          <LoginComponent />
        </>
      );  
    }
  }
}

export default App;
