import React, { useState, useEffect } from "react";

import Typography from "./components/Typography";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventTable from "./components/EventTable";
import EventForm from "./components/EventForm";

const IndexRouteView = (props) => {  
  const [events, setEvents] = useState([]);
  const [formEvent, setFormEvent] = useState(null);
  const [formHidden, setFormHidden] = useState(true);

  useEffect((() => {
    fetch( "/db", {
      method:"GET",
    })
    .then(res => res.json())
    .then(res => {
      setEvents(res);
    });
  }), []);

  const switchFormEvent = (event) => {
    if (formHidden || event != formEvent) {
      setFormEvent(event);
      setFormHidden(false);
    } else {
      setFormEvent(null);
      setFormHidden(true);
    }
  }

  const postRequest = (formData) => {
    let uri = (formEvent === null) ? "/create" : "/update";

    const json = {
      id: formEvent?._id,
      item: {
        name: formData.name, 
        date: formData.date,
        time: formData.time,
        attendance: formData.attendance
      }
    };
    const body = JSON.stringify(json);

    fetch(uri, {
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body 
    })
    .then(response => response.json())
    .then(response => {
      const newEvent = {
        _id: response.id,
        ...json.item
      }

      if (formEvent === null) setEvents([...events, newEvent]);
      else {
        const newEvents = [...events];
        newEvents.splice(newEvents.indexOf(formEvent), 1);
        newEvents.push(newEvent);
        setEvents(newEvents);
      }
    })

    setFormEvent(null);
    setFormHidden(true);
  }

  return (
    <>
      <Header loggedIn={true} />
      
      <Typography tag="h3" className="mb-3">
        Events Scheduled
      </Typography>
      <EventTable events={events} formHandler={switchFormEvent} />

      <EventForm event={formEvent} formHidden={formHidden} postRequest={postRequest} />
      
      <Footer>
        <span class="text-light">
          Icons made by&nbsp; 
          <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry" class="text-light">
            Kiranshastry
          </a>
            &nbsp;from&nbsp;
          <a href="https://www.flaticon.com/" title="Flaticon" class="text-light">
            www.flaticon.com
          </a>
        </span>
      </Footer>
    </>
  )
};

export default IndexRouteView;