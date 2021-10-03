import React, {useState, useEffect} from "./_snowpack/pkg/react.js";
import Typography from "./components/Typography.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import EventTable from "./components/EventTable.js";
import EventTableRow from "./components/EventTableRow.js";
import EventTableEmptyRow from "./components/EventTableEmptyRow.js";
import EventForm from "./components/EventForm.js";
const IndexRouteView = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/db", {
      method: "GET"
    }).then((res) => res.json()).then((res) => {
      setEvents(res);
    });
  }, []);
  console.log(events);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    loggedIn: true
  }), /* @__PURE__ */ React.createElement(Typography, {
    tag: "h3",
    className: "mb-3"
  }, "Events Scheduled"), /* @__PURE__ */ React.createElement(EventTable, null, events.map((event) => {
    return /* @__PURE__ */ React.createElement(EventTableRow, {
      event
    });
  }), /* @__PURE__ */ React.createElement(EventTableEmptyRow, null)), /* @__PURE__ */ React.createElement(EventForm, null), /* @__PURE__ */ React.createElement(Footer, null, /* @__PURE__ */ React.createElement("span", {
    class: "text-light"
  }, "Icons made by ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.flaticon.com/authors/kiranshastry",
    title: "Kiranshastry",
    class: "text-light"
  }, "Kiranshastry"), " from ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.flaticon.com/",
    title: "Flaticon",
    class: "text-light"
  }, "www.flaticon.com"))));
};
export default IndexRouteView;
