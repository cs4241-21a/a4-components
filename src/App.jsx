import React from "react";
import "./style.css";

class Review extends React.Component {
  render() {
    return (
      <tr>
        <td class="title-field">{this.props.hotel}</td>
        <td class="title-field">{this.props.location}</td>
        <td class="number-button-field">{this.props.cleanliness}</td>
        <td class="number-button-field">{this.props.service}</td>
        <td class="number-button-field">{this.props.amenity}</td>
        <td class="number-button-field">{this.props.overallexperience}</td>
        <td>
          <button class="edit-button" onClick={this.editWrap(this)}>
            Edit
          </button>
        </td>
        <td>
          <button class="delete-button" onClick={this.deleteWrap(this)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }

  deleteWrap(cxt) {
    return function() {
      cxt.props.deleteClick(
        cxt.props.hotel,
        cxt.props.location,
        cxt.props.cleanliness,
        cxt.props.service,
        cxt.props.amenity
      );
    };
  }

  editWrap(cxt) {
    return function() {
      cxt.props.editClick(
        cxt.props.hotel,
        cxt.props.location,
        cxt.props.cleanliness,
        cxt.props.service,
        cxt.props.amenity
      );
    };
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], submitfcn: (e) => this.submit(e)};
    this.load();
    window.appState = this;
  }

  submit(e) {
    // prevent default form action from being carried out
    e.preventDefault();

    const hotelName = document.querySelector("#hotel-name"),
      hotelLocation = document.querySelector("#hotel-location"),
      cleanlinessScore = document.querySelector("#cleanliness-score"),
      serviceScore = document.querySelector("#service-score"),
      amenityScore = document.querySelector("#amenity-score"),
      json = {
        hotel: hotelName.value,
        location: hotelLocation.value,
        cleanliness: Number(cleanlinessScore.value),
        service: Number(serviceScore.value),
        amenity: Number(amenityScore.value),
      },
      body = JSON.stringify(json);

    fetch("/submit", {
      method: "post",
      body,
      headers: { "Content-Type": "application/json" },
      "no-cors": true,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector("form").reset();
        window.appState.setState({ reviews: data });
      });
  }

  edit(origHotel, origLocation, origCleanliness, origService, origAmenity) {
    document.querySelector("#hotel-name").value = origHotel;
    document.querySelector("#hotel-location").value = origLocation;
    document.querySelector("#cleanliness-score").value = origCleanliness;
    document.querySelector("#service-score").value = origService;
    document.querySelector("#amenity-score").value = origAmenity;
    const saveBtn = document.querySelector("#Submit-Button");
    saveBtn.innerHTML = "Save Changes";
    window.appState.setState({submitfcn: (e) => {
      e.preventDefault();
      const hotelName = document.querySelector("#hotel-name"),
        hotelLocation = document.querySelector("#hotel-location"),
        cleanlinessScore = document.querySelector("#cleanliness-score"),
        serviceScore = document.querySelector("#service-score"),
        amenityScore = document.querySelector("#amenity-score"),
        json = [
          {
            hotel: origHotel,
            location: origLocation,
            cleanliness: origCleanliness,
            service: origService,
            amenity: origAmenity,
          },
          {
            hotel: hotelName.value,
            location: hotelLocation.value,
            cleanliness: Number(cleanlinessScore.value),
            service: Number(serviceScore.value),
            amenity: Number(amenityScore.value),
          },
        ],
        body = JSON.stringify(json);
      fetch("/edit", {
        method: "post",
        body,
        headers: { "Content-Type": "application/json" },
        "no-cors": true,
      })
        .then((response) => response.json())
        .then((data) => {
          document.querySelector("form").reset();
          window.appState.setState({ reviews: data, submitfcn: window.appState.submit });
          saveBtn.innerHTML = "Submit Review";

        });
    }
  })
  }

  delete(hotel, location, cleanliness, service, amenity) {
    const json = {
        hotel: hotel,
        location: location,
        cleanliness: cleanliness,
        service: service,
        amenity: amenity,
      },
      body = JSON.stringify(json);
    fetch("/delete", {
      method: "post",
      body,
      headers: { "Content-Type": "application/json" },
      "no-cors": true,
    })
      .then((response) => response.json())
      .then((data) => {
        window.appState.setState({ reviews: data });
      });
  }

  load() {
    fetch("/table", { method: "post", "no-cors": true })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ reviews: json });
      });
  }

  render() {
    return (
      <div className="App">
        <header class="site-header">
          <h1>Hotel Reviews</h1>
        </header>
        <h2>Leave a review:</h2>
        <form action="" method="POST">
          <div class="flex-container">
            <div>
              <label>Hotel Name:</label>
              <input
                type="text"
                id="hotel-name"
                placeholder="Enter Hotel Name Here"
              />
            </div>
            <div>
              <label>Hotel Location:</label>
              <input
                type="text"
                id="hotel-location"
                placeholder="Enter Hotel Location Here"
              />
            </div>
            <div>
              <label>Cleanliness (1-10):</label>
              <input
                type="number"
                id="cleanliness-score"
                placeholder="5"
                min="1"
                max="10"
              />
            </div>
            <div>
              <label>Service (1-10):</label>
              <input
                type="number"
                id="service-score"
                placeholder="5"
                min="1"
                max="10"
              />
            </div>
            <div>
              <label>Amenities (1-10):</label>
              <input
                type="number"
                id="amenity-score"
                placeholder="5"
                min="1"
                max="10"
              />
            </div>
            <div id="Button-Container">
              <button id="Submit-Button" onClick={this.state.submitfcn}>
                Submit Review
              </button>
            </div>
          </div>
        </form>
        <h2>Check out other reviews:</h2>
        <table>
          <thead>
            <tr>
              <th class="title-field">Hotel Name</th>
              <th class="title-field">Hotel Location</th>
              <th class="number-button-field">Cleanliness</th>
              <th class="number-button-field">Service</th>
              <th class="number-button-field">Amenities</th>
              <th class="number-button-field">Overall Score</th>
              <th class="number-button-field">Edit</th>
              <th class="number-button-field">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.reviews.map((review, i) => (
              <Review
                key={i}
                hotel={review.hotel}
                location={review.location}
                cleanliness={review.cleanliness}
                service={review.service}
                amenity={review.amenity}
                overallexperience={review.overallexperience}
                deleteClick={this.delete}
                editClick={this.edit}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
