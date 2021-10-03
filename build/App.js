import React from "./_snowpack/pkg/react.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, entries: []};
    this.calculateBMI = this.calculateBMI.bind(this);
    this.weightStatus = this.weightStatus.bind(this);
    const calcbmi = 0;
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
    }, /* @__PURE__ */ React.createElement("div", {
      class: "logo"
    }, /* @__PURE__ */ React.createElement("h1", null, "BMI Calculator")), /* @__PURE__ */ React.createElement("div", {
      class: "calculator"
    }, /* @__PURE__ */ React.createElement("div", {
      id: "bmidisplay"
    }, this.calcbmi), /* @__PURE__ */ React.createElement("form", {
      id: "bmiForm"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "yourname",
      placeholder: "Name"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      id: "weight",
      placeholder: "Weight(lbs)"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      id: "feet",
      placeholder: "Height (Feet)"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      id: "inches",
      placeholder: "Height (Inches)"
    }), /* @__PURE__ */ React.createElement("img", {
      src: "images\\bmichart.png",
      width: "356",
      height: "124",
      alt: "BMI chart"
    }), /* @__PURE__ */ React.createElement("button", {
      id: "submitnew",
      onClick: (e) => this.add(e)
    }, "submit"))), /* @__PURE__ */ React.createElement("h1", null, "Prior results"), /* @__PURE__ */ React.createElement("table", {
      id: "results"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Height(feet)"), /* @__PURE__ */ React.createElement("th", null, "Height(inches)"), /* @__PURE__ */ React.createElement("th", null, "Weight"), /* @__PURE__ */ React.createElement("th", null, "BMI"), /* @__PURE__ */ React.createElement("th", null, "Weight Status"), /* @__PURE__ */ React.createElement("th", null, "Edit"), /* @__PURE__ */ React.createElement("th", null, "Delete"))), /* @__PURE__ */ React.createElement("tbody", null, this.state.entries.map((entry, i) => /* @__PURE__ */ React.createElement("tr", {
      key: i
    }, /* @__PURE__ */ React.createElement("td", null, entry.name), /* @__PURE__ */ React.createElement("td", null, entry.feet), /* @__PURE__ */ React.createElement("td", null, entry.inches), /* @__PURE__ */ React.createElement("td", null, entry.weight), /* @__PURE__ */ React.createElement("td", null, entry.bmi), /* @__PURE__ */ React.createElement("td", null, entry.status), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      id: "edit",
      onClick: (e) => this.editEntry(this.state.entries[i], e, i)
    }, "Edit")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      id: "delete",
      onClick: (e) => this.deleteEntry(this.state.entries[i], e)
    }, "Delete")))))));
  }
  editEntry(entry, evt, index) {
    evt.preventDefault();
    const newname = document.getElementById("yourname");
    const newfeet = document.getElementById("feet");
    const newinches = document.getElementById("inches");
    const newweight = document.getElementById("weight");
    const button = evt.target;
    if (button.innerText == "Edit") {
      button.innerText = "Save";
      newname.value = entry.name;
      newfeet.value = entry.feet;
      newinches.value = entry.inches;
      newweight.value = entry.weight;
    } else if (button.innerText == "Save") {
      const newbmi = this.calculateBMI();
      const newstatus = this.weightStatus();
      fetch("/change", {
        method: "POST",
        body: JSON.stringify({index, name: newname.value, feet: parseInt(newfeet.value), inches: parseInt(newinches.value), weight: parseInt(newweight.value), bmi: newbmi, status: newstatus}),
        headers: {"Content-Type": "application/json"}
      }).then((response) => response.json()).then((json) => this.setState({loading: true, entries: json})).catch((err) => console.log(err));
      button.innerText = "Edit";
      document.getElementById("bmiForm").reset();
      this.load();
    }
  }
  add(evt) {
    evt.preventDefault();
    const newname = document.getElementById("yourname").value;
    const newfeet = document.getElementById("feet").value;
    const newinches = document.getElementById("inches").value;
    const newweight = document.getElementById("weight").value;
    const newbmi = this.calculateBMI();
    const newstatus = this.weightStatus();
    this.calcbmi = newbmi;
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({name: newname, feet: parseInt(newfeet), inches: parseInt(newinches), weight: parseInt(newweight), bmi: parseInt(newbmi), status: newstatus}),
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
  FeetToInches = function() {
    const feet = document.querySelector("#feet").value;
    const inches = document.querySelector("#inches").value;
    const height = 12 * parseInt(feet) + parseInt(inches);
    return height;
  };
  calculateBMI = function() {
    const height = this.FeetToInches();
    const weight = document.querySelector("#weight").value;
    const bmi = parseFloat(weight) / height / height * 703;
    return bmi.toFixed(1);
  };
  weightStatus = function() {
    var bmi = this.calculateBMI();
    var status = "";
    if (bmi < 18.5) {
      status = "Underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Healthy";
    }
    if (bmi >= 25 && bmi <= 29.9) {
      status = "Overweight";
    }
    if (bmi >= 30) {
      status = "Obese";
    }
    return status;
  };
}
export default App;
