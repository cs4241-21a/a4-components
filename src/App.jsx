import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Results from "./components/Results";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/myresults">
              <Results />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
