import React from "./_snowpack/pkg/react.js";
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
  add() {
    let name = document.getElementById("yourname"), order = document.getElementById("order"), dist = document.getElementById("distance"), json = {yourname: name.value, yourorder: order.value, distance: dist.value}, body = JSON.stringify(json);
    fetch("/add", {
      method: "post",
      body,
      headers: {"Content-type": "application/json"}
    }).then((response) => response.json()).then((json2) => this.setState({appdata: json2}));
  }
  remove = (index) => {
    let json = {i: index}, body = JSON.stringify(json);
    fetch("/remove", {
      method: "post",
      body,
      headers: {"Content-type": "application/json"}
    }).then((response) => response.json()).then((json2) => this.setState({appdata: json2}));
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("center", null, /* @__PURE__ */ React.createElement("img", {
      src: "images/mendys.webp",
      alt: "Mendy's Logo",
      width: "360",
      height: "120"
    })), /* @__PURE__ */ React.createElement("h1", null, "ORDER DELIVERY ONLINE"), /* @__PURE__ */ React.createElement("h2", null, "PLEASE FILL OUT ALL FIELDS"), /* @__PURE__ */ React.createElement("hr", {
      style: {width: "70%"}
    }), /* @__PURE__ */ React.createElement(OrderForm, {
      onClick: () => this.add()
    }), /* @__PURE__ */ React.createElement("center", null, /* @__PURE__ */ React.createElement("button", {
      class: "update_button",
      id: "update_button",
      onclick: "updateCell()"
    }, "Update")), /* @__PURE__ */ React.createElement(DataTable, {
      entries: this.state.appdata,
      remove: this.remove
    }));
  }
}
class Row extends React.Component {
  remove = () => this.props.remove(this.props.index);
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, this.props.name), /* @__PURE__ */ React.createElement("td", null, this.props.time), /* @__PURE__ */ React.createElement("td", null, this.props.order), /* @__PURE__ */ React.createElement("td", null, this.props.dist), /* @__PURE__ */ React.createElement("td", null, this.props.dTime), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
      onClick: this.remove
    }, "Delete")));
  }
}
class DataTable extends React.Component {
  remove = (index) => this.props.remove(index);
  render() {
    return /* @__PURE__ */ React.createElement("center", null, /* @__PURE__ */ React.createElement("table", {
      id: "dataTable"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Time Placed"), /* @__PURE__ */ React.createElement("th", null, "Order"), /* @__PURE__ */ React.createElement("th", null, "Distance"), /* @__PURE__ */ React.createElement("th", null, "Expected Dropoff Time")), /* @__PURE__ */ React.createElement("tbody", null, this.props.entries.map((entry, i) => /* @__PURE__ */ React.createElement(Row, {
      key: i,
      index: i,
      name: entry.yourname,
      time: entry.time,
      order: entry.yourorder,
      dist: entry.distance,
      dTime: entry.dropTime,
      remove: this.remove
    })))));
  }
}
class OrderForm extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("center", null, /* @__PURE__ */ React.createElement("h3", null, "Full Name"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "yourname",
      placeholder: "Place Name Here"
    }), /* @__PURE__ */ React.createElement("h3", null, "Order"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "order",
      placeholder: "Place Order Here"
    }), /* @__PURE__ */ React.createElement("h3", null, "Distance From Restaurant"), /* @__PURE__ */ React.createElement("select", {
      name: "distance",
      id: "distance"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Not Far"
    }, "Not Far"), /* @__PURE__ */ React.createElement("option", {
      value: "Decently Far"
    }, "Decently Far"), /* @__PURE__ */ React.createElement("option", {
      value: "Far"
    }, "Far")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
      class: "button",
      type: "button",
      onClick: this.props.onClick
    }, "Submit")));
  }
}
export default App;
