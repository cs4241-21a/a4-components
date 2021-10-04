import React from "../_snowpack/pkg/react.js";
class EditorOverlay extends React.Component {
  clearInputBoxes() {
    const inputs = document.querySelectorAll("input"), prioritySelect = document.getElementById("homeworkPriority"), notesText = document.getElementById("homeworkNotes"), completedRadio = document.getElementById("homeworkComplete"), incompleteRadio = document.getElementById("homeworkIncomplete");
    for (const input of inputs) {
      input.value = "";
    }
    prioritySelect.value = "None";
    notesText.value = "";
    completedRadio.checked = "";
    incompleteRadio.checked = "checked";
  }
  onCancel(event) {
    event.preventDefault();
    this.clearInputBoxes();
    this.props.onCancel();
  }
  onSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById("homeworkName"), courseInput = document.getElementById("homeworkCourse"), dueDateInput = document.getElementById("homeworkDue"), prioritySelect = document.getElementById("homeworkPriority"), notesText = document.getElementById("homeworkNotes"), completedRadio = document.getElementById("homeworkComplete"), homework = {
      name: nameInput.value,
      course: courseInput.value,
      dueDate: dueDateInput.value,
      priority: prioritySelect.value,
      notes: notesText.value,
      complete: completedRadio.checked ? true : false
    };
    if (this.props.createNew) {
      let currDate = new Date();
      homework.subDate = currDate.toISOString();
    } else {
      homework.subDate = this.props.hwData.subDate;
    }
    this.props.onSubmit(homework);
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      class: "mui-panel mui-container",
      id: "overlay"
    }, /* @__PURE__ */ React.createElement("form", {
      class: "mui-form"
    }, /* @__PURE__ */ React.createElement("legend", {
      class: "mui--text-center"
    }, "Homework Editor"), /* @__PURE__ */ React.createElement("label", {
      for: "homeworkName"
    }, "Homework Name:"), /* @__PURE__ */ React.createElement("div", {
      class: "mui-textfield"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "homeworkName",
      placeholder: "Homework name",
      defaultValue: this.props.hwData.name
    })), /* @__PURE__ */ React.createElement("label", {
      for: "homeworkCourse"
    }, "Course Name:"), /* @__PURE__ */ React.createElement("div", {
      class: "mui-textfield"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "homeworkCourse",
      placeholder: "Course",
      defaultValue: this.props.hwData.course
    })), /* @__PURE__ */ React.createElement("label", {
      for: "homeworkDue"
    }, "Due Date:"), /* @__PURE__ */ React.createElement("div", {
      class: "mui-textfield"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "homeworkDue",
      placeholder: "Due Date",
      defaultValue: this.props.hwData.dueDate
    })), /* @__PURE__ */ React.createElement("div", {
      class: "mui-select"
    }, /* @__PURE__ */ React.createElement("label", {
      for: "homeworkPriority"
    }, "Priority Level:"), /* @__PURE__ */ React.createElement("select", {
      id: "homeworkPriority",
      defaultValue: this.props.hwData.priority
    }, /* @__PURE__ */ React.createElement("option", {
      value: "None"
    }, "None"), /* @__PURE__ */ React.createElement("option", {
      value: "Low"
    }, "Low"), /* @__PURE__ */ React.createElement("option", {
      value: "Medium"
    }, "Medium"), /* @__PURE__ */ React.createElement("option", {
      value: "High"
    }, "High"))), /* @__PURE__ */ React.createElement("div", {
      class: "mui-textfield"
    }, /* @__PURE__ */ React.createElement("textarea", {
      type: "text",
      id: "homeworkNotes",
      placeholder: "Notes",
      defaultValue: this.props.hwData.notes
    })), /* @__PURE__ */ React.createElement("div", {
      class: "mui--text-center"
    }, /* @__PURE__ */ React.createElement("form", {
      class: "mui-radio"
    }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
      type: "radio",
      id: "homeworkIncomplete",
      name: "options",
      value: "incomplete",
      defaultChecked: !this.props.hwData.complete
    }), "Incomplete"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
      type: "radio",
      id: "homeworkComplete",
      name: "options",
      value: "complete",
      defaultChecked: this.props.hwData.complete
    }), "Complete"))), /* @__PURE__ */ React.createElement("div", {
      class: "mui--text-center"
    }, /* @__PURE__ */ React.createElement("button", {
      class: "mui-btn",
      type: "reset",
      id: "newHWCancel",
      onClick: (e) => this.onCancel(e)
    }, "Cancel"), /* @__PURE__ */ React.createElement("button", {
      class: "mui-btn mui-btn--primary mui-btn--raised",
      type: "submit",
      onClick: (e) => this.onSubmit(e)
    }, "Submit"))));
  }
}
export default EditorOverlay;
