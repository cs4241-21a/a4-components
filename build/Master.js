import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import NewReceipt from "./NewReceipt.js";
import SavedReceipt from "./SavedReceipt.js";
var mountNewReceipt = document.getElementById("MainForm");
ReactDOM.render(/* @__PURE__ */ React.createElement(NewReceipt, {
  id: "0"
}), mountNewReceipt);
fetch("/get_receipts", {
  method: "post",
  body: JSON.stringify({}),
  headers: {
    "Content-Type": "application/json"
  }
}).then((response) => response.json()).then((json) => {
  console.log("json: ", json);
  let index = 0;
  for (index = 0; index < json.length; index++) {
    var mountSavedForms = document.getElementById("SavedForms");
    mountSavedForms.removeAttribute("id");
    let receipt = json[index];
    ReactDOM.render(/* @__PURE__ */ React.createElement(SavedReceipt, {
      id: receipt._id,
      num_of_people: receipt.num_of_people,
      amount_due: receipt.amount_due,
      tip: receipt.tip,
      tip_percentage: receipt.tip_percentage,
      calc_1: receipt.calc_1,
      calc_2: receipt.calc_2,
      calc_3: receipt.calc_3,
      price_per_person: receipt.price_per_person
    }), mountSavedForms);
  }
});
