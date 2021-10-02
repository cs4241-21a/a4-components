import React from "./_snowpack/pkg/react.js";
class Entry extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.yourname), /* @__PURE__ */ React.createElement("td", null, this.props.score), /* @__PURE__ */ React.createElement("td", null, this.props.rank), /* @__PURE__ */ React.createElement("td", null, '"&#10000"'), /* @__PURE__ */ React.createElement("td", null, '"&#128465"'));
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appdata: []};
    this.load();
  }
  load() {
    fetch("/read", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({appdata: json});
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text"
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.add(e)
    }, "Submit"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Name"), /* @__PURE__ */ React.createElement("td", null, "Score"), /* @__PURE__ */ React.createElement("td", null, "Rank"), /* @__PURE__ */ React.createElement("td", null, "Edit"), /* @__PURE__ */ React.createElement("td", null, "Delete")), this.state.appdata.map((appdata, i) => /* @__PURE__ */ React.createElement(Entry, {
      key: i,
      yourname: appdata.yourname,
      score: appdata.score,
      rank: appdata.rank
    }))));
  }
  toggle(name, completed) {
    fetch("/change", {
      method: "POST",
      body: JSON.stringify({name, completed}),
      headers: {"Content-Type": "application/json"}
    });
  }
  add(evt) {
    const value = document.querySelector("input").value;
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({name: value, completed: false}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({appdata: json});
    });
  }
}
export default App;
