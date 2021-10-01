import React from "./_snowpack/pkg/react.js";
import {BrowserRouter as Router, Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import Login from "./components/Login.js";
import Results from "./components/Results.js";
import "./styles.css.proxy.js";
class App extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
      exact: true,
      path: "/"
    }, /* @__PURE__ */ React.createElement(Login, null)), /* @__PURE__ */ React.createElement(Route, {
      exact: true,
      path: "/myresults"
    }, /* @__PURE__ */ React.createElement(Results, null)))));
  }
}
export default App;
