import React from "./_snowpack/pkg/react.js";
import LoginComponent from "./components/LoginComponent.js";
import LostFoundComponent from "./components/LostFoundComponent.js";
import {getRequest} from "./requests-helper.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: false};
  }
  componentDidMount() {
    this.isAuthenticated();
  }
  isAuthenticated() {
    getRequest("/auth/getUserID", {}, (response) => {
      console.log("Login status: " + response.status);
      if (response.status == 200) {
        this.setState({authenticated: true, username: response.username});
      } else {
        this.setState({authenticated: false});
      }
    });
  }
  render() {
    if (this.state.authenticated) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LostFoundComponent, {
        username: this.state.username
      }));
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LoginComponent, null));
    }
  }
}
export default App;
