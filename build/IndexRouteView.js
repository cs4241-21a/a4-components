import React, {useState, useEffect} from "./_snowpack/pkg/react.js";
import Typography from "./components/Typography.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import EventTable from "./components/EventTable.js";
import EventForm from "./components/EventForm.js";
const IndexRouteView = (props) => {
  const [events, setEvents] = useState([]);
  const [formEvent, setFormEvent] = useState(null);
  const [formHidden, setFormHidden] = useState(true);
  useEffect(() => {
    fetch("/db", {
      method: "GET"
    }).then((res) => res.json()).then((res) => {
      setEvents(res);
    });
  }, []);
  const switchFormEvent = (event) => {
    if (formHidden || event != formEvent) {
      setFormEvent(event);
      setFormHidden(false);
    } else {
      setFormEvent(null);
      setFormHidden(true);
    }
  };
  const postRequest = (formData) => {
    let uri = formEvent === null ? "/create" : "/update";
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
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body
    }).then((response) => response.json()).then((response) => {
      const newEvent = {
        _id: response.id,
        ...json.item
      };
      if (formEvent === null)
        setEvents([...events, newEvent]);
      else {
        const newEvents = [...events];
        newEvents.splice(newEvents.indexOf(formEvent), 1);
        newEvents.push(newEvent);
        setEvents(newEvents);
      }
    });
    setFormEvent(null);
    setFormHidden(true);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    loggedIn: true
  }), /* @__PURE__ */ React.createElement(Typography, {
    tag: "h3",
    className: "mb-3"
  }, "Events Scheduled"), /* @__PURE__ */ React.createElement(EventTable, {
    events,
    formHandler: switchFormEvent
  }), /* @__PURE__ */ React.createElement(EventForm, {
    event: formEvent,
    formHidden,
    postRequest
  }), /* @__PURE__ */ React.createElement(Footer, null, /* @__PURE__ */ React.createElement("span", {
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
