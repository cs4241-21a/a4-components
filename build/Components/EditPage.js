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
import TableDataHeaderWithEdit from "./Table/TableDataHeaderWithEdit.js";
import TableDataItemWithEdit from "./Table/TableDataItemWithEdit.js";
import AddRatingForm from "./Forms/AddRatingForm.js";
import EditRatingForm from "./Forms/EditRatingForm.js";
import {Form} from "../_snowpack/pkg/react-bootstrap.js";
class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tableLoaded: true};
    this.redirectToResponses = this.redirectToResponses.bind(this);
    this.stayOnEdit = this.stayOnEdit.bind(this);
    this.signOut = this.signOut.bind(this);
    this.currentIndex = -1;
    this.currentEditData = false;
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
        onClick: this.redirectToResponses
      }, "View Other Responses")), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Button, {
        size: "lg",
        variant: "outline-dark",
        onClick: this.signOut
      }, "Sign Out")))), /* @__PURE__ */ React.createElement(Table, {
        striped: true,
        bordered: true,
        responsive: true
      }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement(TableDataHeaderWithEdit, null)), /* @__PURE__ */ React.createElement("tbody", null, this.props.data.map((item, index) => {
        return /* @__PURE__ */ React.createElement(TableDataItemWithEdit, {
          refreshPage: this.refresh,
          deleteRow: this.refresh,
          data: this.props.data[index],
          index,
          dataUsername: this.props.usernames[index],
          userUsername: this.props.username
        });
      }), ";")), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container, {
        fluid: true,
        className: "responses-background p-3"
      }, /* @__PURE__ */ React.createElement(Container, {
        className: "py-3"
      }, /* @__PURE__ */ React.createElement(Row, {
        className: "text-center"
      }, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(AddRatingForm, {
        stayOnEdit: this.stayOnEdit,
        username: this.props.username
      })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(EditRatingForm, null)))))), ");", /* @__PURE__ */ React.createElement(Container, {
        fluid: true,
        className: "header-footer-background py-3 text-center"
      }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h3", null, "Don't want to add a new rating or edit a current one? Check out how other students responded here!"), /* @__PURE__ */ React.createElement(Button, {
        size: "lg",
        variant: "outline-dark",
        onClick: this.redirectToResponses
      }, "View Current Responses")))));
    } else {
      waitingForTable = /* @__PURE__ */ React.createElement("h1", null, "Loading database...");
    }
    return waitingForTable;
  }
  stayOnEdit() {
    console.log("Updating!");
    this.props.waitAndUpdate();
  }
  organizeDataRow() {
    console.log("Our data looks like " + this.props.data);
    let countPerPerson = 0;
    let previousUsername = "";
    this.props.data.map((item, index) => {
      return /* @__PURE__ */ React.createElement(TableDataItemWithEdit, {
        refreshPage: this.refresh,
        deleteRow: this.refresh,
        data: this.props.data[index],
        index,
        dataUsername: this.props.usernames[index],
        userUsername: this.props.username
      });
    });
  }
  redirectToResponses() {
    this.props.onResponses();
  }
  signOut() {
    this.props.signOut();
    console.log("Signing out?");
  }
  editRow(rowIndex) {
  }
}
export default EditPage;
