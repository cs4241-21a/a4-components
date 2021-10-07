import React from "../../_snowpack/pkg/react.js";
function TableDataItem(props) {
  let rowData = props.data;
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, props.username), /* @__PURE__ */ React.createElement("td", null, rowData.name), /* @__PURE__ */ React.createElement("td", null, rowData.studentYear), /* @__PURE__ */ React.createElement("td", null, rowData.yearsRemaining), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteDorm), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteDining), /* @__PURE__ */ React.createElement("td", null, rowData.favoriteSpot), /* @__PURE__ */ React.createElement("td", null, rowData.notes));
}
export default TableDataItem;
