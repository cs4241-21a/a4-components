import React from "./_snowpack/pkg/react.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {assignments: []};
    this.load = this.load.bind(this);
    this.submit = this.submit.bind(this);
    this.doneAssignment = this.doneAssignment.bind(this);
    this.render = this.render.bind(this);
    this.load();
  }
  load() {
    let blankjson = {};
    let body = JSON.stringify(blankjson);
    fetch("/submit", {
      method: "POST",
      body
    }).then(function(response) {
      return response.json();
    }).then((data) => {
      this.setState({assignments: data});
    });
  }
  submit(e) {
    e.preventDefault();
    const json = {};
    json["courseName"] = document.getElementById("courseName").value;
    json["assignmentName"] = document.getElementById("assignmentName").value;
    json["dueDate"] = document.getElementById("dueDate").value;
    json["submissionType"] = document.getElementById("submissionType").value;
    json["description"] = document.getElementById("description").value;
    const body = JSON.stringify(json);
    fetch("/submit", {
      method: "POST",
      body
    }).then(function(response) {
      return response.json();
    }).then((data) => {
      this.setState({assignments: data});
    });
  }
  doneAssignment(num) {
    const json = {};
    json["removeAssignment"] = num;
    const body = JSON.stringify(json);
    fetch("/submit", {
      method: "POST",
      body
    }).then(function(response) {
      return response.json();
    }).then((data) => {
      this.setState({assignments: data});
    });
  }
  render() {
    let rows = [];
    for (let i = 0; i < this.state.assignments.length; i++) {
      let assignment = this.state.assignments[i];
      let rawDueDate = assignment.dueDate;
      let dateObj = new Date(rawDueDate);
      let dueDate = dateObj.toLocaleString("en-US");
      let row = /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, assignment.courseName), /* @__PURE__ */ React.createElement("td", null, assignment.assignmentName), /* @__PURE__ */ React.createElement("td", null, dueDate), /* @__PURE__ */ React.createElement("td", null, assignment.daysLeft), /* @__PURE__ */ React.createElement("td", null, assignment.submissionType), /* @__PURE__ */ React.createElement("td", null, assignment.description), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
        type: "button",
        id: "turnedInButton" + i,
        onClick: () => {
          this.doneAssignment(i);
        }
      }, "Done!")));
      rows.push(row);
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Enter new assignments here:"), /* @__PURE__ */ React.createElement("form", {
      id: "assignmentInfo",
      action: ""
    }, /* @__PURE__ */ React.createElement("p", null, "Course Name:"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "courseName"
    }), /* @__PURE__ */ React.createElement("p", null, "Assignment Name:"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "assignmentName"
    }), /* @__PURE__ */ React.createElement("p", null, "Due date:"), /* @__PURE__ */ React.createElement("input", {
      type: "datetime-local",
      id: "dueDate"
    }), /* @__PURE__ */ React.createElement("p", null, "Submission type:"), /* @__PURE__ */ React.createElement("select", {
      id: "submissionType",
      name: "submissionType"
    }, /* @__PURE__ */ React.createElement("option", {
      value: "Canvas"
    }, "Canvas"), /* @__PURE__ */ React.createElement("option", {
      value: "In-person"
    }, "In-person"), /* @__PURE__ */ React.createElement("option", {
      value: "Email"
    }, "Email"), /* @__PURE__ */ React.createElement("option", {
      value: "InstructAssist"
    }, "InstructAssist"), /* @__PURE__ */ React.createElement("option", {
      value: "GitHub"
    }, "GitHub"), /* @__PURE__ */ React.createElement("option", {
      value: "Other"
    }, "Other")), /* @__PURE__ */ React.createElement("p", null, "Description (optional):"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "description"
    }), /* @__PURE__ */ React.createElement("button", {
      type: "submit",
      id: "formSubmit",
      onClick: this.submit
    }, "submit")), /* @__PURE__ */ React.createElement("h1", null, "List of assignments:"), /* @__PURE__ */ React.createElement("table", {
      id: "assignmentTable"
    }, /* @__PURE__ */ React.createElement("thead", {
      id: "assignmentTableHead"
    }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Course Name"), /* @__PURE__ */ React.createElement("th", null, "Assignment Name"), /* @__PURE__ */ React.createElement("th", null, "Due date"), /* @__PURE__ */ React.createElement("th", null, "Days left"), /* @__PURE__ */ React.createElement("th", null, "Submission Type"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Turned In?"))), /* @__PURE__ */ React.createElement("tbody", null, rows)));
  }
}
export default App;
