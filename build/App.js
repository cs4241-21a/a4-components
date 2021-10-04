import React from "./_snowpack/pkg/react.js";
import icon from "./icon.png.proxy.js";
import "./App.css.proxy.js";
class Servant extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.name), /* @__PURE__ */ React.createElement("td", null, this.props.occupation), /* @__PURE__ */ React.createElement("td", null, this.props.strength), /* @__PURE__ */ React.createElement("td", null, this.props.endurance), /* @__PURE__ */ React.createElement("td", null, this.props.agility), /* @__PURE__ */ React.createElement("td", null, this.props.magic), /* @__PURE__ */ React.createElement("td", null, this.props.luck), /* @__PURE__ */ React.createElement("td", null, this.props.noble));
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {servants: []};
    this.load();
  }
  load() {
    fetch("/read", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({servants: json});
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("h1", null, "Fate Servant Generator"), /* @__PURE__ */ React.createElement("p2", null, "Note: All attributes (EX ~ E) are generated randomly based on occupation chosen"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p2", null, "eg: Saber occupation will be more likely to generate high attribute (EX, A++) in Strength"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("img", {
      src: icon,
      className: "App-icon",
      alt: "icon",
      width: "344",
      height: "282"
    }), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("strong", null, "Add Servant information"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Character Name: "), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      id: "name",
      type: "text"
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Character Occupation (Saber, Lancer, Archer, Caster, Rider, Assassin): "), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      id: "occupation",
      type: "text"
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
      className: "addb",
      onClick: (e) => this.add(e)
    }, "add"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("strong", null, "Servants Table: "), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
      className: "App-table",
      width: "100%",
      border: "1"
    }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Ocuupation"), /* @__PURE__ */ React.createElement("th", null, "Strength"), /* @__PURE__ */ React.createElement("th", null, "Endurance"), /* @__PURE__ */ React.createElement("th", null, "Agility"), /* @__PURE__ */ React.createElement("th", null, "Magical Power"), /* @__PURE__ */ React.createElement("th", null, "Good Luck"), /* @__PURE__ */ React.createElement("th", null, "Noble Phantasm")), this.state.servants.map((servent, i) => /* @__PURE__ */ React.createElement(Servant, {
      key: i,
      name: servent.name,
      occupation: servent.occupation,
      strength: servent.strength,
      endurance: servent.endurance,
      agility: servent.agility,
      magic: servent.magic,
      luck: servent.luck,
      noble: servent.noble
    })))));
  }
  add(evt) {
    const servantname = document.querySelector("#name").value;
    const servantoccupation = document.querySelector("#occupation").value;
    if (servantname === "") {
      alert("Cannot enter null name!!");
    } else if (servantoccupation != "Saber" && servantoccupation != "Lancer" && servantoccupation != "Archer" && servantoccupation != "Caster" && servantoccupation != "Rider" && servantoccupation != "Assassin") {
      alert("The entered occupation does not exist!!");
    } else {
      fetch("/add", {
        method: "POST",
        body: JSON.stringify({name: servantname, occupation: servantoccupation}),
        headers: {"Content-Type": "application/json"}
      }).then((response) => response.json()).then((json) => {
        this.setState({servants: json});
      });
    }
  }
}
export default App;
