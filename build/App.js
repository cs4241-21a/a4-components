import React from "./_snowpack/pkg/react.js";
class Entry extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", {
      id: this.props.yourname
    }, /* @__PURE__ */ React.createElement("td", null, this.props.yourname), /* @__PURE__ */ React.createElement("td", null, this.props.score), /* @__PURE__ */ React.createElement("td", null, this.props.rank));
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
      type: "text",
      id: "inputName"
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => this.reactSubmit(e)
    }, "Submit"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Score"), /* @__PURE__ */ React.createElement("th", null, "Rank"))), /* @__PURE__ */ React.createElement("tbody", null, this.state.appdata.map((appdata, i) => /* @__PURE__ */ React.createElement(Entry, {
      key: i,
      yourname: appdata.yourname,
      score: appdata.score,
      rank: appdata.rank
    })))));
  }
  reactSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("inputName").value, input2 = document.getElementById("printScore"), json = {
      yourname: input,
      score: parseInt(input2.innerText),
      rank: 0
    }, body = JSON.stringify(json);
    if (input === "") {
      window.alert("Please enter a username");
      return false;
    }
    fetch("/submit", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((json2) => {
      this.setState({appdata: json2});
    });
    return false;
  }
}
export default App;
