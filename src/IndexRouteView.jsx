import React from "react";
import Typography from "./components/Typography";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventTable from "./components/EventTable";
import EventTableRow from "./components/EventTableRow";
import EventTableEmptyRow from "./components/EventTableEmptyRow";
import EventForm from "./components/EventForm";

const IndexRouteView = (props) => {
  

  return (
    <>
      <Header loggedIn={true} />
      
      <Typography tag="h3" className="mb-3">
        Events Scheduled
      </Typography>
      <EventTable>
        {/* Add a for each table row !!! */}
        <EventTableEmptyRow />
      </EventTable>

      <EventForm />
      
      <Footer>
        <span class="text-light">
          Icons made by 
          <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry" class="text-light">
            &nbsp;Kiranshastry
          </a>
            &nbsp;from
          <a href="https://www.flaticon.com/" title="Flaticon" class="text-light">
            &nbsp;www.flaticon.com
          </a>
        </span>
      </Footer>
    </>
  )
};

export default IndexRouteView;