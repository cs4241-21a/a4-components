import React from "./_snowpack/pkg/react.js";
import EditPage from "./Components/EditPage.js";
import ResponsesPage from "./Components/ResponsesPage.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      onResponses: true
    };
    this.closeResponses = this.closeResponses.bind(this);
    this.stayEditing = this.stayEditing.bind(this);
    this.goToResponses = this.goToResponses.bind(this);
    this.refresh = this.refresh.bind(this);
    this.waitAndUpdate = this.waitAndUpdate.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  render() {
    console.log("Rendering..., responses is " + this.state.onResponses);
    console.log("Are we logged in?" + this.state.loggedIn);
    if (!this.state.onResponses || this.state.goBackToEdit) {
      if (this.state.loggedIn) {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(EditPage, {
          waitAndUpdate: this.waitAndUpdate,
          refresh: this.refresh,
          onResponses: this.goToResponses,
          signOut: this.signOut,
          data: this.state.tableData,
          username: this.state.username,
          usernames: this.state.usernames
        }));
      } else {
        window.location.replace("index.html");
        return null;
      }
    } else {
      if (this.state.retrievedTableData) {
        return /* @__PURE__ */ React.createElement(ResponsesPage, {
          stayOnEdit: this.stayEditing,
          onClose: this.closeResponses,
          usernames: this.state.usernames,
          data: this.state.tableData,
          loggedIn: this.state.loggedIn
        });
      } else {
        return /* @__PURE__ */ React.createElement("h1", null, "Loading table data...");
      }
    }
  }
  waitAndUpdate() {
    console.log("Waiting...");
    setTimeout(function() {
      window.location.reload();
    }.bind(this), 1e3);
  }
  stayEditing() {
    console.log("Staying on the edit page!");
    this.setState({
      loggedIn: true,
      onResponses: false
    });
  }
  closeResponses() {
    console.log("Closing the responses!");
    this.setState({
      loggedIn: this.state.loggedIn,
      onResponses: false
    });
  }
  goToResponses() {
    console.log("Going to responses!");
    this.setState({
      loggedIn: this.state.loggedIn,
      goBackToEdit: false,
      onResponses: true
    });
  }
  signOut() {
    console.log("Signing out!");
    fetch("/signOut", {
      method: "PUT",
      headers: {"Content-Type": "application/json"}
    }).then((res) => {
      return res.json();
    }).then((json) => {
      let signOutSuccess = json.signOutSuccess;
      if (signOutSuccess) {
        console.log("Signing out now!");
      }
    });
    this.setState({
      loggedIn: false,
      onResponses: false
    });
  }
  fetchUsername() {
    fetch("/getUsername", {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }).then((res) => {
      return res.json();
    }).then((innerJson) => {
      console.log("InnerJson is " + Object.keys(innerJson));
      let innerUsername = innerJson.username;
      console.log("Our inner username is: " + innerUsername);
    });
  }
  loggedIn() {
    fetch("/getUsername", {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }).then((res) => {
      return res.json();
    }).then((innerJson) => {
      let innerUsername = innerJson.username;
      console.log("Username is " + innerUsername);
      return !(innerUsername === null || innerUsername === void 0 || innerUsername.trim() === "");
    });
  }
  refresh() {
    this.state = {loggedIn: true, onResponses: false};
  }
  fetchTableData() {
    fetch("/getFullTableData", {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }).then((res) => {
      return res.json();
    }).then((json) => {
      fetch("/getUsername", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      }).then((res) => {
        return res.json();
      }).then((innerJson) => {
        let innerUsername = innerJson.username;
        console.log("Our username is defined as {" + innerUsername + "}");
        if (innerUsername == void 0 || innerUsername === "") {
          this.setState({loggedIn: false, onResponses: this.state.onResponses, tableData: json.ratings, username: innerUsername, usernames: json.usernames, retrievedTableData: true});
        } else {
          console.log("Does this trigger?");
          this.setState({loggedIn: true, onResponses: this.state.onResponses, tableData: json.ratings, username: innerUsername, usernames: json.usernames, retrievedTableData: true});
        }
      });
    });
  }
  componentDidMount() {
    let loggedIn = this.loggedIn;
    console.log("Logged in status..." + loggedIn);
    this.state = {loggedIn, onResponses: false};
    this.fetchTableData();
  }
}
export default App;
