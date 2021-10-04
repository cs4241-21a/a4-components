import React from "react";

import Location from "./Location";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };
    this.load();
  }

  load() {
    fetch("/init", {
      method: "GET",
    }).then(async (response) => {
      const data = await response.json();
      this.setState({ locations: data });
    });
  }

  calcRating(cost, priority) {
    return (priority - cost + 10) / 2;
  }

  submit(e) {
    e.preventDefault();

    const location = document.querySelector("#location"),
      cost = document.querySelector("#cost"),
      priority = document.querySelector("#priority"),
      visited = document.querySelector("#visited"),
      json = {
        location: location.value,
        cost: cost.value,
        priority: priority.value,
        rating: this.calcRating(cost.value, priority.value),
        visited: visited.checked,
      },
      body = JSON.stringify(json);

    fetch("/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    }).then(async (response) => {
      const data = await response.json();
      this.setState({ locations: data });

    });
  }

  update = (e, i, id) => {
    const newLocation = document.querySelector("#location" + i),
      cost = document.querySelector("#cost" + i),
      priority = document.querySelector("#priority" + i),
      visited = document.querySelector("#visited" + i),
      json = {
        location: newLocation.value,
        cost: cost.value,
        priority: priority.value,
        rating: (priority.value - cost.value + 10) / 2,
        visited: visited.checked,
        _id: id,
      },
      body = JSON.stringify(json);

    fetch("/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    }).then(async (response) => {
      const data = await response.json();
      this.setState({ locations: data });

    });
  }

  delete = (e,id) => {
    console.log("id",id)
    const json = { _id: id },
            body = JSON.stringify(json);

    fetch("/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    }).then(async (response) => {
      const data = await response.json();
      this.setState({ locations: data });
      window.location.reload();


    });
  }

  render() {
    return (
      <>
        <h1 class="text-center">Locations to Travel to</h1>

        <div class="d-flex justify-content-center my-5">
          <form class="row row-cols-lg-auto g-3 align-items-center">
            <div class="col-12">
              <label for="location">Location</label>
              <input type="text" class="form-control" id="location" required />
            </div>
            <div class="col-12">
              <label for="cost">Cost</label>
              <input type="number" class="form-control" id="cost" required />
            </div>
            <div class="col-12">
              <label for="priority">Priority</label>
              <input
                type="number"
                class="form-control"
                id="priority"
                required
              />
            </div>
            <div class="col-12">
              <div class="form-check mt-4">
                <input class="form-check-input " type="checkbox" id="visited" />
                <label class="form-check-label" for="visited">
                  Visited
                </label>
              </div>
            </div>
            <div class="col-12">
              <button
                id="submit-button"
                type="submit"
                class="btn btn-primary mt-4"
                onClick={(e) => this.submit(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div class="text-center d-flex justify-content-center mt-5">
          <table id="location-table" class="table table-striped  w-50">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Cost</th>
                <th scope="col">Priority</th>
                <th scope="col">Rating</th>
                <th scope="col">Visited</th>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody id="location-body">
              {this.state.locations.map((location, i) => (
                <Location
                  i={i}
                  id={location._id}
                  location={location.location}
                  cost={location.cost}
                  rating={location.rating}
                  priority={location.priority}
                  visited={location.visited}
                  update={this.update}
                  delete={this.delete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
