import React, { useEffect, useState } from "react";
import "./style.css";

const Car = function (props) {
  return (
    <tr>
      <td>{props.yourname}</td>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.year}</td>
      <td>{props.plateNum}</td>
      <td>{props.age}</td>
      <td>
        <button onClick={() => props.onclick(props.plateNum)}>Delete</button>
      </td>
    </tr>
  )
}

const App = function (props) {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('/read')
      .then(response => response.json())
      .then(json => {
        setCars(json)
        document.getElementById("submit").onclick = submit
      })
  }, [])

  const submit = function () {
    const name = document.querySelector('#yourname'),
      make = document.querySelector("#make"),
      model = document.querySelector("#model"),
      year = document.querySelector("#year"),
      plateNum = document.querySelector("#platenumber")

    const body = checkInput(name, make, model, year, plateNum)

    if (body === false) {
      return false
    }

    fetch('/submit', {
      method: 'POST',
      body,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then((newCars) => {
        setCars(newCars)
        console.log("Added row to server.")
      })
  }

  const remove = function (plateNum) {
    const json = {
      plateNum: plateNum
    },
      body = JSON.stringify(json)

    fetch('/remove', {
      method: 'POST',
      body,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then((newCars) => {
        setCars(newCars)
        console.log("Deleted row from server.")
      })
  }

  const checkInput = function (name, make, model, year, plateNum) {
    if (name.value === "" || make.value === "" || model.value === "" || year.value === "" || plateNum.value === "") {
      alert("Need to fill all fields!")
      return false
    }

    if (isNaN(year.value)) {
      alert("Please input a valid year.")
      return false
    }

    let yearNum = parseInt(year.value)

    if (yearNum < 1886) {
      alert("Cars were not invented yet. Please input a valid year.")
      return false
    }

    let d = new Date()
    let d1 = d.getFullYear()

    if (yearNum > d1) {
      alert("This year's models aren't released yet.")
      return false
    }

    year.value = yearNum

    if (plateNum.value.length < 5 || plateNum.value.length > 8) {
      alert("A plate number has a min of 5 and max of 8 characters.")
      return false
    }

    plateNum.value = plateNum.value.toUpperCase()

    const json = {
      yourname: name.value,
      make: make.value,
      model: model.value,
      year: year.value,
      plateNum: plateNum.value
    },
      body = JSON.stringify(json)

    return body
  }

  return (
    <div className="App">
      <h1>Car Registry</h1>
      <h2>Put your car information here to be entered into the registry.</h2>
      <div id='grid'>
        <form id='carform' autocomplete='off'>
          <h3>Enter Information Here:</h3>
          <label>Your Name:</label><br />
          <input type='text' id='yourname' placeholder='Your Name Here' /><br /><br />
          <label>Make:</label><br />
          <input type='text' id='make' placeholder='Car Make Here' /><br /><br />
          <label>Model:</label><br />
          <input type='text' id='model' placeholder='Car Model Here' /><br /><br />
          <label>Year:</label><br></br>
          <input type='text' id='year' placeholder='Car Year Here' /><br /><br />
          <label>Plate Number:</label><br />
          <input type='text' id='platenumber' placeholder='Plate Number Here' /><br /><br />
          <button id="submit">Submit Information</button>
        </form>
        <table id='cartable'>
          <caption>Registry Table</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th id='plate'>Plate Number</th>
              <th>Car Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, i) => <Car key={i} yourname={car.yourname} make={car.make} model={car.model}
              year={car.year} plateNum={car.plateNum} age={car.age} onclick={remove} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
