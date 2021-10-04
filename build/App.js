import React from "./_snowpack/pkg/react.js";
import Location from "./Location.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {locations: []};
    this.load();
  }
  load() {
    fetch("/init", {
      method: "GET"
    }).then(async (response) => {
      const data = await response.json();
      this.setState({locations: data});
    });
  }
  calcRating(cost, priority) {
    return (priority - cost + 10) / 2;
  }
  submit(e) {
    e.preventDefault();
    const location = document.querySelector("#location"), cost = document.querySelector("#cost"), priority = document.querySelector("#priority"), visited = document.querySelector("#visited"), json = {
      location: location.value,
      cost: cost.value,
      priority: priority.value,
      rating: this.calcRating(cost.value, priority.value),
      visited: visited.checked
    }, body = JSON.stringify(json);
    fetch("/submit", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body
    }).then(async (response) => {
      const data = await response.json();
      this.setState({locations: data});
    });
  }
  update = (e, i, id) => {
    const newLocation = document.querySelector("#location" + i), cost = document.querySelector("#cost" + i), priority = document.querySelector("#priority" + i), visited = document.querySelector("#visited" + i), json = {
      location: newLocation.value,
      cost: cost.value,
      priority: priority.value,
      rating: (priority.value - cost.value + 10) / 2,
      visited: visited.checked,
      _id: id
    }, body = JSON.stringify(json);
    fetch("/update", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body
    }).then(async (response) => {
      const data = await response.json();
      this.setState({locations: data});
    });
  };
  delete = (e, id) => {
    console.log("id", id);
    const json = {_id: id}, body = JSON.stringify(json);
    fetch("/delete", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body
    }).then(async (response) => {
      const data = await response.json();
      this.setState({locations: data});
      window.location.reload();
    });
  };
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
      class: "text-center"
    }, "Locations to Travel to"), /* @__PURE__ */ React.createElement("div", {
      class: "d-flex justify-content-center my-5"
    }, /* @__PURE__ */ React.createElement("form", {
      class: "row row-cols-lg-auto g-3 align-items-center"
    }, /* @__PURE__ */ React.createElement("div", {
      class: "col-12"
    }, /* @__PURE__ */ React.createElement("label", {
      for: "location"
    }, "Location"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      class: "form-control",
      id: "location",
      required: true
    })), /* @__PURE__ */ React.createElement("div", {
      class: "col-12"
    }, /* @__PURE__ */ React.createElement("label", {
      for: "cost"
    }, "Cost"), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      class: "form-control",
      id: "cost",
      required: true
    })), /* @__PURE__ */ React.createElement("div", {
      class: "col-12"
    }, /* @__PURE__ */ React.createElement("label", {
      for: "priority"
    }, "Priority"), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      class: "form-control",
      id: "priority",
      required: true
    })), /* @__PURE__ */ React.createElement("div", {
      class: "col-12"
    }, /* @__PURE__ */ React.createElement("div", {
      class: "form-check mt-4"
    }, /* @__PURE__ */ React.createElement("input", {
      class: "form-check-input ",
      type: "checkbox",
      id: "visited"
    }), /* @__PURE__ */ React.createElement("label", {
      class: "form-check-label",
      for: "visited"
    }, "Visited"))), /* @__PURE__ */ React.createElement("div", {
      class: "col-12"
    }, /* @__PURE__ */ React.createElement("button", {
      id: "submit-button",
      type: "submit",
      class: "btn btn-primary mt-4",
      onClick: (e) => this.submit(e)
    }, "Submit")))), /* @__PURE__ */ React.createElement("div", {
      class: "text-center d-flex justify-content-center mt-5"
    }, /* @__PURE__ */ React.createElement("table", {
      id: "location-table",
      class: "table table-striped  w-50"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Location"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Cost"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Priority"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Rating"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }, "Visited"), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }), /* @__PURE__ */ React.createElement("th", {
      scope: "col"
    }))), /* @__PURE__ */ React.createElement("tbody", {
      id: "location-body"
    }, this.state.locations.map((location, i) => /* @__PURE__ */ React.createElement(Location, {
      i,
      id: location._id,
      location: location.location,
      cost: location.cost,
      rating: location.rating,
      priority: location.priority,
      visited: location.visited,
      update: this.update,
      delete: this.delete
    }))))));
  }
}
export default App;
