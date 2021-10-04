import React from "../_snowpack/pkg/react.js";
import {useHistory} from "../_snowpack/pkg/react-router-dom.js";
import "../_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import Container from "../_snowpack/pkg/react-bootstrap/Container.js";
import Row from "../_snowpack/pkg/react-bootstrap/Row.js";
import Col from "../_snowpack/pkg/react-bootstrap/Col.js";
import Button from "../_snowpack/pkg/react-bootstrap/Button.js";
import Image from "../_snowpack/pkg/react-bootstrap/Image.js";
import Table from "../_snowpack/pkg/react-bootstrap/Table.js";
import "../styles.css.proxy.js";
import TableDataHeader from "./Table/TableDataHeader.js";
import TableDataItem from "./Table/TableDataItem.js";
class ResponsesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tableLoaded: true};
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }
  render() {
    let waitingForTable = false;
    if (this.state.tableLoaded) {
      waitingForTable = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container, {
        className: "header-footer-background text-center p-3",
        fluid: true
      }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Image, {
        src: "https://cdn.glitch.com/c2c9492b-2ab1-4df2-b027-f9c1281d4de7%2FPikPng.com_wpi-logo-png_3464524.png?v=1632623944035",
        className: "wpi-logo",
        alt: "WPI Logo",
        fluid: true
      }), /* @__PURE__ */ React.createElement("h1", {
        class: "text-center"
      }, "Student Preferences")), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h2", null, "Welcome to WPI's ", /* @__PURE__ */ React.createElement("i", null, "unofficial"), " dorm, dining hall, and campus location comparison tool!")), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h2", null, "Check how students have rated your favorite spots on campus and add your own ratings!")))), /* @__PURE__ */ React.createElement(Container, {
        className: "responses-background text-center p-3",
        fluid: true
      }, /* @__PURE__ */ React.createElement(Row, {
        className: "py-3"
      }, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Button, {
        size: "lg",
        variant: "outline-dark",
        onClick: this.redirectToEdit
      }, "Edit Your Ratings")), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Button, {
        size: "lg",
        variant: "outline-dark",
        onClick: this.stepOnSeal
      }, "Step On The Seal")))), /* @__PURE__ */ React.createElement(Table, {
        striped: true,
        bordered: true,
        responsive: true
      }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement(TableDataHeader, null)), /* @__PURE__ */ React.createElement("tbody", null, this.props.data.map((item, index) => {
        return /* @__PURE__ */ React.createElement(TableDataItem, {
          data: this.props.data[index],
          username: this.props.usernames[index]
        });
      }))), /* @__PURE__ */ React.createElement(Image, {
        src: "https://cdn.glitch.com/5786a749-abf3-443b-8bab-466af4fe7d5a%2FWPI_Quad.jpeg?v=1631079961919",
        className: "w-100 py-3",
        alt: "WPI Quad",
        fluid: true
      }), /* @__PURE__ */ React.createElement(Container, {
        fluid: true,
        className: "header-footer-background py-3 text-center"
      }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h5", null, /* @__PURE__ */ React.createElement("a", {
        className: "link-dark",
        href: "https://www.wpi.edu/sites/default/files/docs/Offices/Marketing-Communications/WPI_Institutional_9-4-12.pdf"
      }, "WPI Logo Used With Permission"))), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h5", null, /* @__PURE__ */ React.createElement("a", {
        className: "link-dark",
        href: "https://en.wikipedia.org/wiki/File:WPI_Quad.jpeg"
      }, "WPI Quadrangle Used With Permission"))))));
    } else {
      waitingForTable = /* @__PURE__ */ React.createElement("h1", null, "Loading database...");
    }
    return waitingForTable;
  }
  stepOnSeal() {
    alert("You stepped on the seal! All undergraduate students now graduate 1 year later! (Coming soon!)");
  }
  redirectToEdit() {
    this.props.onClose();
  }
}
export default ResponsesPage;
