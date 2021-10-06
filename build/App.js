import React from "./_snowpack/pkg/react.js";
import "./styles.css.proxy.js";
class TableRow extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.name), /* @__PURE__ */ React.createElement("td", null, this.props.val1), /* @__PURE__ */ React.createElement("td", null, this.props.val2), /* @__PURE__ */ React.createElement("td", null, this.props.op), /* @__PURE__ */ React.createElement("td", null, this.props.result));
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.convert = this.convert.bind(this);
    this.state = {comps: []};
    this.load();
  }
  load() {
    fetch("/read", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({comps: json});
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("div", {
      class: "flex-container"
    }, /* @__PURE__ */ React.createElement("div", {
      id: "titles"
    }, /* @__PURE__ */ React.createElement("h1", null, "The Lame Calculator"), /* @__PURE__ */ React.createElement("h2", null, "Somehow still a better deal than TI calculators™"), /* @__PURE__ */ React.createElement("h3", null, "Collaborative Computing, done wrong©")), /* @__PURE__ */ React.createElement("p", null, "Enter a valid number in the boxes along with an operator, then press compute to perform the designed operation on those numbers. Results are sorted with most recent appearing at the top for convenience. "), /* @__PURE__ */ React.createElement("p", {
      id: "warning"
    }, "WARNING: DO NOT ATTEMPT TO COMMUNICATE WITH CALCULATOR IN BINARY VIA COMPUTATION. IGNORE ALL SECRET RESPONSES."), /* @__PURE__ */ React.createElement("div", {
      class: "flex-container",
      id: "computeform"
    }, /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("input", {
      type: "number",
      class: "fvalue",
      id: "value1"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      class: "foperator",
      id: "operator"
    }), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      class: "fvalue",
      id: "value2"
    }), /* @__PURE__ */ React.createElement("button", {
      id: "compute",
      onClick: (e) => this.submit(e)
    }, "compute"))), /* @__PURE__ */ React.createElement("div", {
      id: "notesandconvert",
      class: "flex-container"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Notes:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Supported operations are +, -, *, /, and ^."), /* @__PURE__ */ React.createElement("li", null, "Whitespace is supported within numbers, but NOT by the binary parser."), /* @__PURE__ */ React.createElement("li", null, "01110100 01110010 01111001 00100000 01110100 01100101 01110011 01110100"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, `The "convert" button converts text to the decimal equivalent of the text's binary representation. Use this to avoid accidentally communicating with the calculator by having your computation result be the decimal equivalent of some binary phrase.`), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "bintext"
    }), /* @__PURE__ */ React.createElement("input", {
      id: "bintextconv"
    }), /* @__PURE__ */ React.createElement("button", {
      id: "convert",
      onClick: this.convert
    }, "convert"), /* @__PURE__ */ React.createElement("p", {
      id: "convertedtext"
    }))), /* @__PURE__ */ React.createElement("div", {
      class: "flex-container",
      id: "tablecontainer"
    }, /* @__PURE__ */ React.createElement("table", {
      id: "table"
    }, /* @__PURE__ */ React.createElement("colgroup", null, /* @__PURE__ */ React.createElement("col", {
      span: "1",
      style: {width: "30%"}
    }), /* @__PURE__ */ React.createElement("col", {
      span: "1",
      style: {width: "20%"}
    }), /* @__PURE__ */ React.createElement("col", {
      span: "1",
      style: {width: "20%"}
    }), /* @__PURE__ */ React.createElement("col", {
      span: "1",
      style: {width: "5%"}
    }), /* @__PURE__ */ React.createElement("col", {
      span: "1",
      style: {width: "25%"}
    })), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Computation Number"), /* @__PURE__ */ React.createElement("th", null, "Var 1"), /* @__PURE__ */ React.createElement("th", null, "Var 2"), /* @__PURE__ */ React.createElement("th", null, "Op."), /* @__PURE__ */ React.createElement("th", null, "Result")), this.state.comps.map((comp, i) => /* @__PURE__ */ React.createElement(TableRow, {
      val1: this.state.comps[this.state.comps.length - 1 - i].x,
      val2: this.state.comps[this.state.comps.length - 1 - i].y,
      op: this.state.comps[this.state.comps.length - 1 - i].o,
      name: this.state.comps[this.state.comps.length - 1 - i].name,
      result: this.state.comps[this.state.comps.length - 1 - i].result
    })))))));
  }
  convert() {
    let input = document.getElementById("bintext").value.toLowerCase();
    let output = "";
    for (var i = 0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + " ";
    }
    document.getElementById("bintextconv").value = parseInt(output.split(" ").join(""), 2);
  }
  submit(e) {
    e.preventDefault();
    let val1 = document.getElementById("value1").value;
    let val2 = document.getElementById("value2").value;
    const op = document.getElementById("operator").value;
    val1 = val1.replace(/\s+/g, "");
    val2 = val2.replace(/\s+/g, "");
    if (isNaN(val1) || isNaN(val2) || val1 === "" || val2 === "") {
      alert("Must input numbers");
    } else if (op.match(/^[-+/^*]/) === null) {
      alert("Must input valid operator (+, -, *, /, ^)");
    } else {
      let json = {x: val1, y: val2, o: op};
      let body = JSON.stringify(json);
      fetch("/submit", {
        method: "POST",
        body,
        headers: {"Content-Type": "application/json"}
      }).then((response) => response.json()).then((json2) => {
        this.setState({comps: json2});
      });
    }
  }
}
export default App;
