import React from "./_snowpack/pkg/react.js";
import "./_snowpack/pkg/bootstrap.js";
import "./_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
class AmountDueField extends React.Component {
  getAmountDue = (e) => {
    const {onNewAmountInput} = this.props;
    onNewAmountInput(e.target.value);
  };
  render() {
    return /* @__PURE__ */ React.createElement("input", {
      class: "form-control fs-5",
      type: "text",
      id: "given_amount",
      style: {textAlign: "right"},
      "data-type": "currency",
      placeholder: "$0.00",
      onKeyUp: (event) => this.handle_amount_due(event, ""),
      onBlur: (e) => this.handle_amount_due(e, "blur")
    });
  }
  handle_amount_due(event, blur) {
    if (blur === "blur") {
      this.formatCurrency(event, blur);
    } else {
      this.formatCurrency(event, "");
    }
    this.getAmountDue(event);
  }
  formatCurrency(event, blur) {
    let input = event.target.value;
    let input_val = "";
    if (input !== "") {
      input_val = "$" + input;
    }
    if (input_val === "") {
      return;
    }
    if (input_val.indexOf(".") >= 0) {
      var decimal_pos = input_val.indexOf(".");
      var left_side = input_val.substring(0, decimal_pos);
      var right_side = input_val.substring(decimal_pos);
      left_side = this.formatNumber(left_side);
      right_side = this.formatNumber(right_side);
      if (blur === "blur") {
        right_side += "00";
      }
      right_side = right_side.substring(0, 2);
      input_val = "$" + left_side + "." + right_side;
    } else {
      input_val = this.formatNumber(input_val);
      input_val = "$" + input_val;
      if (blur === "blur") {
        input_val += ".00";
      }
    }
    event.target.value = input_val;
    this.setState({input: input_val});
  }
  formatNumber(n) {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
export default AmountDueField;
