import React from "./_snowpack/pkg/react.js";
class Row extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
      id: "id" + this.props.id
    }, "  ", this.props.id, "  "), /* @__PURE__ */ React.createElement("td", {
      id: "fname" + this.props.id
    }, " ", this.props.fname, " "), /* @__PURE__ */ React.createElement("td", {
      id: "lname" + this.props.id
    }, " ", this.props.lname, " "), /* @__PURE__ */ React.createElement("td", {
      id: "sex" + this.props.id
    }, " ", this.props.sex, " "), /* @__PURE__ */ React.createElement("td", {
      id: "class" + this.props.id
    }, " ", this.props.ageClass, " "), /* @__PURE__ */ React.createElement("td", {
      id: "dateJoined" + this.props.id
    }, " ", this.props.dateJoined, " "), /* @__PURE__ */ React.createElement("td", {
      id: "membershipType" + this.props.id
    }, " ", this.props.membershipType, " "), /* @__PURE__ */ React.createElement("td", {
      id: "expireDate" + this.props.id
    }, " ", this.props.expireDate, " "), /* @__PURE__ */ React.createElement("td", null, " ", /* @__PURE__ */ React.createElement("span", {
      title: "Modify this entry",
      class: "modifyButtons",
      onClick: this.modifyInputBoxes
    }, " "), " "), /* @__PURE__ */ React.createElement("td", null, " ", /* @__PURE__ */ React.createElement("span", {
      title: "Delete this entry",
      class: "deleteButtons",
      onClick: this.delete
    }, " "), " "));
  }
  modifyInputBoxes(id) {
    const primaryButton = document.getElementById("primaryButton");
    const secondaryButton = document.getElementById("secondaryButton");
    this.copyCellsToInputFields(id);
    primaryButton.innerHTML = "Modify";
    primaryButton.style.backgroundColor = "#ffd814";
    primaryButton.style.borderColor = "#ffd814";
    primaryButton.style.color = "0x000000";
    secondaryButton.innerHTML = "Cancel Modifying";
    primaryButton.onclick = modify;
    secondaryButton.onclick = cancelModify;
  }
  copyCellsToInputFields(id) {
    const inputId = document.getElementById("id");
    const inputFname = document.getElementById("fname");
    const inputLname = document.getElementById("lname");
    const inputSex = document.getElementById("sex");
    const inputClass = document.getElementById("class");
    const inputDateJoined = document.getElementById("dateJoined");
    const inputMembershipType = document.getElementById("membershipType");
    const newExpireDate = document.getElementById("expireDate");
    inputId.value = id;
    inputFname.value = document.getElementById("fname" + id).innerHTML;
    inputLname.value = document.getElementById("lname" + id).innerHTML;
    inputSex.value = document.getElementById("sex" + id).innerHTML;
    inputClass.value = document.getElementById("class" + id).innerHTML;
    inputDateJoined.value = document.getElementById("dateJoined" + id).innerHTML;
    inputMembershipType.value = document.getElementById("membershipType" + id).innerHTML;
    newExpireDate.value = document.getElementById("expireDate" + id).innerHTML;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appData: []};
    this.add = this.add.bind(this);
    this.modify = this.modify.bind(this);
    this.delete = this.delete.bind(this);
    this.load();
  }
  load() {
    fetch("/retrieve", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      this.setState({appData: json});
    });
  }
  add(evt) {
    evt.preventDefault();
    const inputId = document.getElementById("id");
    const inputFname = document.getElementById("fname");
    const inputLname = document.getElementById("lname");
    const inputSex = document.getElementById("sex");
    const inputClass = document.getElementById("class");
    const inputDateJoined = document.getElementById("dateJoined");
    const inputMembershipType = document.getElementById("membershipType");
    const newExpireDate = document.getElementById("expireDate");
    fetch("/add", {
      method: "POST",
      body: JSON.stringify({
        id: inputId.value,
        fname: inputFname.value,
        lname: inputLname.value,
        sex: inputSex.value,
        ageClass: inputClass.value,
        dateJoined: inputDateJoined.value,
        membershipType: inputMembershipType.value,
        expireDate: newExpireDate.value
      }),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({appData: json});
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("img", {
      id: "logo",
      src: "resources/logo.webp",
      width: "300px",
      height: "300px",
      title: "XXXL Gym Logo"
    }), /* @__PURE__ */ React.createElement("form", {
      id: "form"
    }, /* @__PURE__ */ React.createElement("label", {
      for: "id"
    }, " ID: "), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      type: "number",
      id: "id",
      name: "name",
      disabled: true
    }), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "fname"
    }, "First name:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "fname",
      name: "fname",
      required: "required",
      pattern: "[A-Za-z0-9]{1,20}"
    }), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "lname"
    }, "Last name:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "lname",
      name: "lname",
      required: "required",
      pattern: "[A-Za-z0-9]{1,20}"
    }), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "sex"
    }, " Sex:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("select", {
      id: "sex",
      name: "sex"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Male"
    }, "Male"), /* @__PURE__ */ React.createElement("option", {
      value: "Female"
    }, "Female")), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "class"
    }, " Age Class:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("select", {
      id: "class",
      name: "ageClass"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Teen"
    }, "Teen"), /* @__PURE__ */ React.createElement("option", {
      value: "Junior"
    }, "Junior"), /* @__PURE__ */ React.createElement("option", {
      value: "Open"
    }, "Open"), /* @__PURE__ */ React.createElement("option", {
      value: "Master1"
    }, "Master1"), /* @__PURE__ */ React.createElement("option", {
      value: "Master2"
    }, "Master2"), /* @__PURE__ */ React.createElement("option", {
      value: "Master3"
    }, "Master3")), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "dateJoined"
    }, "Date Joined:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      type: "date",
      id: "dateJoined",
      name: "fname",
      onchange: this.updateExpireDate
    }), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "membershipType"
    }, "Membership Type:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("select", {
      id: "membershipType",
      name: "membershipType",
      onchange: this.updateExpireDate
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Monthly"
    }, "Monthly"), /* @__PURE__ */ React.createElement("option", {
      value: "Yearly"
    }, "Yearly"), /* @__PURE__ */ React.createElement("option", {
      value: "Lifetime"
    }, "Lifetime")), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
      for: "expireDate"
    }, "Expire Date:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
      type: "date",
      id: "expireDate",
      name: "expireDate",
      disabled: true
    }), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
      id: "formButtons"
    }, /* @__PURE__ */ React.createElement("button", {
      id: "primaryButton",
      class: "staticButtons",
      onClick: this.add
    }, "Add New Member"), /* @__PURE__ */ React.createElement("button", {
      id: "secondaryButton",
      class: "staticButtons",
      onClick: this.clearForm
    }, "Clear Contents"))), /* @__PURE__ */ React.createElement("table", {
      id: "table"
    }, /* @__PURE__ */ React.createElement("colgroup", null, /* @__PURE__ */ React.createElement("col", {
      id: "idCol"
    }), /* @__PURE__ */ React.createElement("col", {
      id: "fnameCol"
    }), /* @__PURE__ */ React.createElement("col", {
      id: "lnameCol"
    }), /* @__PURE__ */ React.createElement("col", {
      id: "sexCol"
    }), /* @__PURE__ */ React.createElement("col", {
      id: "classCol"
    }), /* @__PURE__ */ React.createElement("col", {
      id: "dateJoinedCol"
    }), /* @__PURE__ */ React.createElement("col", {
      id: "membershipTypeCol"
    }), /* @__PURE__ */ React.createElement("col", {
      id: "expireDateCol"
    })), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "ID"), /* @__PURE__ */ React.createElement("th", null, "First Name"), /* @__PURE__ */ React.createElement("th", null, "Last Name"), /* @__PURE__ */ React.createElement("th", null, "Sex"), /* @__PURE__ */ React.createElement("th", null, "Age Class"), /* @__PURE__ */ React.createElement("th", null, "Date Joined"), /* @__PURE__ */ React.createElement("th", null, "Membership Type"), /* @__PURE__ */ React.createElement("th", null, "Expire Date")), /* @__PURE__ */ React.createElement("tbody", {
      id: "oldTbody"
    }, this.state.appData.map((row, i) => /* @__PURE__ */ React.createElement(Row, {
      id: row.id,
      fname: row.fname,
      lname: row.lname,
      sex: row.sex,
      ageClass: row.ageClass,
      dateJoined: row.dateJoined,
      membershipType: row.membershipType,
      expireDate: row.expireDate
    })))));
  }
  modify(evt) {
    evt.preventDefault();
    const inputId = document.getElementById("id");
    const inputFname = document.getElementById("fname");
    const inputLname = document.getElementById("lname");
    const inputSex = document.getElementById("sex");
    const inputClass = document.getElementById("class");
    const inputDateJoined = document.getElementById("dateJoined");
    const inputMembershipType = document.getElementById("membershipType");
    const newExpireDate = document.getElementById("expireDate");
    fetch("/modify", {
      method: "POST",
      body: JSON.stringify({
        id: inputId.value,
        fname: inputFname.value,
        lname: inputLname.value,
        sex: inputSex.value,
        ageClass: inputClass.value,
        dateJoined: inputDateJoined.value,
        membershipType: inputMembershipType.value,
        expireDate: newExpireDate.value
      }),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({appData: json});
    });
  }
  delete(id) {
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({
        id
      }),
      headers: {"Content-Type": "application/json"}
    }).then((response) => response.json()).then((json) => {
      this.setState({appData: json});
    });
  }
  clearForm(e) {
    e.preventDefault();
    const inputId = document.getElementById("id");
    const inputFname = document.getElementById("fname");
    const inputLname = document.getElementById("lname");
    const inputSex = document.getElementById("sex");
    const inputClass = document.getElementById("class");
    const inputDateJoined = document.getElementById("dateJoined");
    const inputMembershipType = document.getElementById("membershipType");
    const newExpireDate = document.getElementById("expireDate");
    inputId.value = "";
    inputFname.value = "";
    inputLname.value = "";
    inputSex.value = "";
    inputClass.value = "";
    inputDateJoined.value = "";
    inputMembershipType.value = "";
    newExpireDate.value = "";
  }
  cancelModify(e) {
    const primaryButton = document.getElementById("primaryButton");
    const secondaryButton = document.getElementById("secondaryButton");
    e.preventDefault();
    clearForm(e);
    primaryButton.innerHTML = "Add New Member";
    primaryButton.style.backgroundColor = "#42B72A";
    primaryButton.style.borderColor = "#42B72A";
    primaryButton.style.color = "0xffffff";
    secondaryButton.innerHTML = "Clear Contents";
    primaryButton.onclick = addEntry;
    secondaryButton.onclick = clearForm;
  }
  updateExpireDate() {
    newDate = new Date(inputDateJoined.value);
    const inputDateJoined = document.getElementById("dateJoined");
    const inputMembershipType = document.getElementById("membershipType");
    const newExpireDate = document.getElementById("expireDate");
    switch (inputMembershipType.value) {
      case "Monthly":
        newDate.setMonth(newDate.getMonth() + 1);
        break;
      case "Yearly":
        newDate.setFullYear(newDate.getFullYear() + 1);
        break;
      case "Lifetime":
        newDate.setFullYear(newDate.getFullYear() + 100);
        break;
      default:
        console.log("Unknown membership type" + inputMembershipType.value);
    }
    month = newDate.getMonth() + 1;
    date = newDate.getDate();
    let stringMonth = month;
    if (month < 10) {
      stringMonth = "0" + stringMonth;
    }
    let stringDate = date;
    if (date < 10) {
      stringDate = "0" + stringDate;
    }
    newExpireDate.value = newDate.getFullYear() + "-" + stringMonth + "-" + stringDate;
  }
}
export default App;
