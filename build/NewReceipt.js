import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import PeopleDropDown from "./PeopleDropDown.js";
import AmountDueField from "./AmountDueField.js";
import TipGivenField from "./TipField.js";
import SavedReceipt from "./SavedReceipt.js";
class NewReceipt extends React.Component {
  num_of_people = "1";
  amount_due = "$0.00";
  tip = "$0.00";
  constructor(props) {
    super(props);
    this.state = {
      calc_1: "$_.__",
      calc_2: "$_.__",
      calc_3: "$_.__",
      tip_percentage: ":"
    };
    this.people = React.createRef();
    this.submit = this.submit.bind(this);
    this.dropDown = React.createRef();
    this.amount_input = React.createRef();
    this.tip_input = React.createRef();
  }
  getNumOfPeople = (numOfPeople) => {
    this.num_of_people = numOfPeople;
  };
  getGivenAmount = (amountDue) => {
    this.amount_due = amountDue;
    this.updateTip();
  };
  getGivenTip = (tipInput) => {
    this.tip = tipInput;
    this.updateTip();
  };
  updateTip() {
    let val = this.amount_due;
    val = val.replace(",", "");
    val = val.replace("$", "");
    let total_cost = parseFloat(val);
    let twenty_percent = total_cost * 0.2;
    let seventeen_point_five_percent = total_cost * 0.175;
    let fifteen_percent = total_cost * 0.15;
    let calc_1 = "$" + twenty_percent.toFixed(2);
    let calc_2 = "$" + seventeen_point_five_percent.toFixed(2);
    let calc_3 = "$" + fifteen_percent.toFixed(2);
    if (calc_1 === "$NaN") {
      calc_1 = "$_.__";
      calc_2 = "$_.__";
      calc_3 = "$_.__";
    }
    let unformatted_amount_due = this.amount_due.replace(",", "").replace("$", "");
    unformatted_amount_due = parseFloat(unformatted_amount_due);
    let unformatted_tip = this.tip.replace(",", "").replace("$", "");
    unformatted_tip = parseFloat(unformatted_tip);
    let calculated_percentage = ":";
    if (unformatted_tip >= 0 && unformatted_amount_due > 0) {
      calculated_percentage = unformatted_tip / unformatted_amount_due * 100;
      calculated_percentage = calculated_percentage.toFixed(2);
      calculated_percentage = "(" + calculated_percentage + "%) :";
    }
    this.setState({
      calc_1,
      calc_2,
      calc_3,
      tip_percentage: calculated_percentage
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      id: this.props.id,
      class: "shadow p-4 container mt-5",
      style: {width: "500px", height: "450px"}
    }, /* @__PURE__ */ React.createElement("div", {
      class: "row fs-4 mb-5"
    }, /* @__PURE__ */ React.createElement("div", {
      class: "col-sm-1"
    }, /* @__PURE__ */ React.createElement(PeopleDropDown, {
      ref: this.dropDown,
      onNewSelection: this.getNumOfPeople
    })), /* @__PURE__ */ React.createElement("div", {
      class: "col-sm",
      style: {marginLeft: "10px"}
    }, /* @__PURE__ */ React.createElement("label", {
      for: "people_input"
    }, " people "))), /* @__PURE__ */ React.createElement("div", {
      class: "row fs-2",
      style: {textAlign: "center"}
    }, /* @__PURE__ */ React.createElement("div", {
      class: "col-sm"
    }, "20%"), /* @__PURE__ */ React.createElement("div", {
      class: "col-sm"
    }, "17.5%"), /* @__PURE__ */ React.createElement("div", {
      class: "col-sm"
    }, "15%")), /* @__PURE__ */ React.createElement("div", {
      class: "row fs-4 mb-1",
      style: {textAlign: "center"}
    }, /* @__PURE__ */ React.createElement("div", {
      class: "col-sm",
      id: "tip_twenty"
    }, " ", this.state.calc_1, " "), /* @__PURE__ */ React.createElement("div", {
      class: "col-sm",
      id: "tip_seventeen"
    }, " ", this.state.calc_1, " "), /* @__PURE__ */ React.createElement("div", {
      class: "col-sm",
      id: "tip_fifteen"
    }, " ", this.state.calc_1, " ")), /* @__PURE__ */ React.createElement("div", {
      class: "row mt-5"
    }, /* @__PURE__ */ React.createElement("div", {
      class: "col-sm-8",
      style: {textAlign: "right", marginTop: "auto", marginBottom: "auto"}
    }, /* @__PURE__ */ React.createElement("label", {
      class: "fs-3"
    }, " Amount Due : ")), /* @__PURE__ */ React.createElement("div", {
      class: "col-sm-4"
    }, /* @__PURE__ */ React.createElement(AmountDueField, {
      ref: this.amount_input,
      onNewAmountInput: this.getGivenAmount
    }))), /* @__PURE__ */ React.createElement("div", {
      class: "row mt-3"
    }, /* @__PURE__ */ React.createElement("div", {
      class: "col-sm-8",
      style: {textAlign: "right", marginTop: "auto", marginBottom: "auto"}
    }, /* @__PURE__ */ React.createElement("label", {
      class: "fs-3",
      id: "tip"
    }, "  + Tip ", this.state.tip_percentage, " ")), /* @__PURE__ */ React.createElement("div", {
      class: "col-sm-4"
    }, /* @__PURE__ */ React.createElement(TipGivenField, {
      ref: this.tip_input,
      onNewTipInput: this.getGivenTip
    }))), /* @__PURE__ */ React.createElement("div", {
      class: "row mt-5"
    }, /* @__PURE__ */ React.createElement("button", {
      type: "button",
      style: {width: "250px", margin: "0 auto"},
      class: "btn btn-primary btn-lg fs-4",
      onClick: this.submit
    }, "Calculate", /* @__PURE__ */ React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "35",
      height: "35",
      fill: "currentColor",
      class: "bi bi-download",
      viewBox: "0 0 20 20"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
    }))))), /* @__PURE__ */ React.createElement("div", {
      id: "NewSavedReceipt"
    }));
  }
  submit() {
    let json = {
      num_of_people: this.num_of_people,
      amount_due: this.amount_due,
      tip: this.tip,
      tip_percentage: this.state.tip_percentage,
      calc_1: this.state.calc_1,
      calc_2: this.state.calc_2,
      calc_3: this.state.calc_3
    };
    fetch("/add", {
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      return response.json();
    }).then((json2) => {
      fetch("/find_receipt", {
        method: "POST",
        body: JSON.stringify({id: json2.insertedId}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => response.json()).then((json3) => {
        let receipt = json3[0];
        var mountNewSavedReceipt = document.getElementById("SavedForms");
        ReactDOM.render(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SavedReceipt, {
          id: receipt._id,
          num_of_people: receipt.num_of_people,
          amount_due: receipt.amount_due,
          tip: receipt.tip,
          tip_percentage: receipt.tip_percentage,
          calc_1: receipt.calc_1,
          calc_2: receipt.calc_2,
          calc_3: receipt.calc_3,
          price_per_person: receipt.price_per_person
        })), mountNewSavedReceipt);
        this.refreshForm();
      });
    });
  }
  refreshForm() {
    this.dropDown.current.resetState();
    this.setState({
      calc_1: "$_.__",
      calc_2: "$_.__",
      calc_3: "$_.__",
      tip_percentage: ":"
    });
  }
}
export default NewReceipt;
