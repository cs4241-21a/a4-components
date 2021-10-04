import React, {useEffect, useState} from "./_snowpack/pkg/react.js";
import "./style.css.proxy.js";
const Car = function(props) {
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, props.yourname), /* @__PURE__ */ React.createElement("td", null, props.make), /* @__PURE__ */ React.createElement("td", null, props.model), /* @__PURE__ */ React.createElement("td", null, props.year), /* @__PURE__ */ React.createElement("td", null, props.plateNum), /* @__PURE__ */ React.createElement("td", null, props.age), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => props.onclick(props.plateNum)
  }, "Delete")));
};
const App = function(props) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("/read").then((response) => response.json()).then((json) => {
      setCars(json);
      document.getElementById("submit").onclick = submit;
    });
  }, []);
  const submit = function() {
    const name = document.querySelector("#yourname"), make = document.querySelector("#make"), model = document.querySelector("#model"), year = document.querySelector("#year"), plateNum = document.querySelector("#platenumber");
    const body = checkInput(name, make, model, year, plateNum);
    if (body === false) {
      return false;
    }
    fetch("/submit", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((newCars) => {
      setCars(newCars);
      console.log("Added row to server.");
    });
  };
  const remove = function(plateNum) {
    const json = {
      plateNum
    }, body = JSON.stringify(json);
    fetch("/remove", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((newCars) => {
      setCars(newCars);
      console.log("Deleted row from server.");
    });
  };
  const checkInput = function(name, make, model, year, plateNum) {
    if (name.value === "" || make.value === "" || model.value === "" || year.value === "" || plateNum.value === "") {
      alert("Need to fill all fields!");
      return false;
    }
    if (isNaN(year.value)) {
      alert("Please input a valid year.");
      return false;
    }
    let yearNum = parseInt(year.value);
    if (yearNum < 1886) {
      alert("Cars were not invented yet. Please input a valid year.");
      return false;
    }
    let d = new Date();
    let d1 = d.getFullYear();
    if (yearNum > d1) {
      alert("This year's models aren't released yet.");
      return false;
    }
    year.value = yearNum;
    if (plateNum.value.length < 5 || plateNum.value.length > 8) {
      alert("A plate number has a min of 5 and max of 8 characters.");
      return false;
    }
    plateNum.value = plateNum.value.toUpperCase();
    const json = {
      yourname: name.value,
      make: make.value,
      model: model.value,
      year: year.value,
      plateNum: plateNum.value
    }, body = JSON.stringify(json);
    return body;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("h1", null, "Car Registry"), /* @__PURE__ */ React.createElement("h2", null, "Put your car information here to be entered into the registry."), /* @__PURE__ */ React.createElement("div", {
    id: "grid"
  }, /* @__PURE__ */ React.createElement("form", {
    id: "carform",
    autocomplete: "off"
  }, /* @__PURE__ */ React.createElement("h3", null, "Enter Information Here:"), /* @__PURE__ */ React.createElement("label", null, "Your Name:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "yourname",
    placeholder: "Your Name Here"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, "Make:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "make",
    placeholder: "Car Make Here"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, "Model:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "model",
    placeholder: "Car Model Here"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, "Year:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "year",
    placeholder: "Car Year Here"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, "Plate Number:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "platenumber",
    placeholder: "Plate Number Here"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    id: "submit"
  }, "Submit Information")), /* @__PURE__ */ React.createElement("table", {
    id: "cartable"
  }, /* @__PURE__ */ React.createElement("caption", null, "Registry Table"), /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Make"), /* @__PURE__ */ React.createElement("th", null, "Model"), /* @__PURE__ */ React.createElement("th", null, "Year"), /* @__PURE__ */ React.createElement("th", {
    id: "plate"
  }, "Plate Number"), /* @__PURE__ */ React.createElement("th", null, "Car Age"), /* @__PURE__ */ React.createElement("th", null, "Delete"))), /* @__PURE__ */ React.createElement("tbody", null, cars.map((car, i) => /* @__PURE__ */ React.createElement(Car, {
    key: i,
    yourname: car.yourname,
    make: car.make,
    model: car.model,
    year: car.year,
    plateNum: car.plateNum,
    age: car.age,
    onclick: remove
  }))))));
};
export default App;
