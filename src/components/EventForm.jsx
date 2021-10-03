import React from "react";

const EventForm = (props) => {
  // Handle Form Logic !!!

  return (
    <div class="row d-flex m-0 justify-content-center text-left">
      <form class="col-sm-4 m-5 p-5 bg-dark text-light border border-light rounded" hidden>
        <h3 class="text-center mb-5">
          Schedule an Event
        </h3>
        <div class="form-group row">
          <label for="name" class="col-sm-4 col-form-label">Event Name:</label>
          <input type="text" id="name" class="col-sm-8 form-control" placeholder="Zoom Meeting" />
        </div>
        <div class="form-group row">
          <label for="date" class="col-sm-4 col-form-label">Date:</label>
          <input type="date" id="date" class="col-sm-8 form-control" />
        </div>
        <div class="form-group row">
          <label for="time" class="col-sm-4 col-form-label">Time:</label>
          <input type="time" id="time" class="col-sm-8 form-control" />
        </div>
        <div class="form-group row">
          <label class="form-check-label col-sm-4" for="attendance">Mandatory:</label>
          <div class="col-sm-8">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="attendance" />
            </div>
          </div>
        </div>
        <div class="text-center">
          <button id="submit-button" class="btn btn-primary" value="">Save Event</button>
        </div>
      </form>
    </div>
  )
}

export default EventForm;