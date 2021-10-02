import React from "./_snowpack/pkg/react.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, entries: []};
    this.load();
  }
  load() {
    fetch("/read", {method: "GET", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({loading: false, entries: json});
    }).catch((err) => console.log(err));
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("button", {
      id: "submitnew",
      onClick: (e) => this.add(e)
    }, "submit"), /* @__PURE__ */ React.createElement("table", {
      id: "results"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Height(feet)"), /* @__PURE__ */ React.createElement("th", null, "Height(inches)"), /* @__PURE__ */ React.createElement("th", null, "Weight"), /* @__PURE__ */ React.createElement("th", null, "BMI"), /* @__PURE__ */ React.createElement("th", null, "Weight Status"), /* @__PURE__ */ React.createElement("th", null, "Edit"), /* @__PURE__ */ React.createElement("th", null, "Delete"))), /* @__PURE__ */ React.createElement("tbody", null, this.state.entries.map((entry, i) => /* @__PURE__ */ React.createElement("tr", {
      key: i
    }, /* @__PURE__ */ React.createElement("td", null, entry.name), /* @__PURE__ */ React.createElement("td", null, entry.feet), /* @__PURE__ */ React.createElement("td", null, entry.inches), /* @__PURE__ */ React.createElement("td", null, entry.weight), /* @__PURE__ */ React.createElement("td", null, entry.bmi), /* @__PURE__ */ React.createElement("td", null, entry.status), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      id: i,
      onClick: (e) => this.editEntry(this.state.entries[i], e)
    }, "Edit")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      id: i,
      onClick: (e) => this.deleteEntry(this.state.entries[i], e)
    }, "Delete")))))));
  }
  editEntry(entry, e) {
    const newname = document.getElementById("yourname");
    const newfeet = document.getElementById("feet");
    const newinches = document.getElementById("inches");
    const newweight = document.getElementById("weight");
    const button = e.target;
    newname.value = entry.name;
    newfeet.value = entry.feet;
    newinches.value = entry.inches;
    newweight.value = entry.weight;
    button.innerText = "Save";
    button.onclick = function() {
      fetch("/change", {
        method: "POST",
        body: JSON.stringify({index: e.target.id, name: newname.value, feet: newfeet.value, inches: newinches.value, weight: newweight.value, bmi: "0", status: "Healthy"}),
        headers: {"Content-Type": "application/json"}
      }).then((response) => response.json()).then((json) => {
        this.setState({entries: json});
      }).catch((err) => console.log(err));
      button.innerText = "Edit";
    };
    this.load();
  }
  add(evt) {
    evt.preventDefault();
    const newname = document.getElementById("yourname").value;
    const newfeet = document.getElementById("feet").value;
    const newinches = document.getElementById("inches").value;
    const newweight = document.getElementById("weight").value;
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({name: newname, feet: newfeet, inches: newinches, weight: newweight, bmi: 0, status: "Healthy"}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({entries: json});
    });
  }
  deleteEntry(entry, e) {
    e.preventDefault();
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({index: e.target.id, name: entry.name, feet: entry.feet, inches: entry.inches, bmi: entry.bmi, status: entry.status}),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({loading: true, entries: json});
    });
    this.load();
  }
}
export default App;
