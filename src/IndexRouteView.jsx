import React, { useState, useEffect } from "react";

import Typography from "./components/Typography";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventTable from "./components/EventTable";
import EventTableRow from "./components/EventTableRow";
import EventTableEmptyRow from "./components/EventTableEmptyRow";
import EventForm from "./components/EventForm";

const IndexRouteView = (props) => {  
  const [events, setEvents] = useState([]);

  useEffect((() => {
    fetch( "/db", {
      method:"GET",
    })
    .then(res => res.json())
    .then(res => {
      setEvents(res);
    });
  }), []);

  return (
    <>
      <Header loggedIn={true} />
      
      <Typography tag="h3" className="mb-3">
        Events Scheduled
      </Typography>
      <EventTable>
        {events.map(event => {
          return (
            <EventTableRow event={event} />
          )  
        })}
        <EventTableEmptyRow />
      </EventTable>

      <EventForm />
      
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