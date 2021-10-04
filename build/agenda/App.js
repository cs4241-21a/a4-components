import React from "../_snowpack/pkg/react.js";
import EditorOverlay from "./EditorOverlay.js";
import Assignment from "./Assignment.js";
const hwAPIPath = "/agenda/data";
class App extends React.Component {
  getNewEditorSettings(display = false, createNew = true, hwData = {}) {
    return {
      display,
      createNew,
      hwData
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hwData: {},
      editorSettings: this.getNewEditorSettings()
    };
    this.load();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  load() {
    fetch(hwAPIPath, {
      method: "GET"
    }).then((res) => res.json()).then((res) => {
      this.setState({
        name: res.name,
        hwData: res.data,
        editorSettings: this.getNewEditorSettings()
      });
    });
  }
  openBlankEditor() {
    this.setState({
      name: this.state.name,
      hwData: this.state.hwData,
      editorSettings: this.getNewEditorSettings(true)
    });
  }
  onEdit(hwData) {
    this.setState({
      name: this.state.name,
      hwData: this.state.hwData,
      editorSettings: this.getNewEditorSettings(false, false, hwData)
    });
    this.setState({
      name: this.state.name,
      hwData: this.state.hwData,
      editorSettings: this.getNewEditorSettings(true, false, hwData)
    });
  }
  onDelete(hwData) {
    const body = JSON.stringify(hwData);
    fetch(hwAPIPath, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }).then((response) => {
      if (response.status === 200) {
        let newHWData = this.state.hwData;
        delete newHWData[hwData.subDate];
        this.setState({
          name: this.state.name,
          hwData: newHWData,
          editorSettings: this.state.editorSettings
        });
      }
    });
  }
  onCancel() {
    this.setState({
      name: this.state.name,
      hwData: this.state.hwData,
      editorSettings: this.getNewEditorSettings()
    });
  }
  onSubmit(hwData) {
    const body = JSON.stringify(hwData);
    console.log(this);
    fetch(hwAPIPath, {
      method: this.state.editorSettings.createNew ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }).then((res) => res.json()).then((homework) => {
      let newHWData = this.state.hwData;
      newHWData[homework.subDate] = homework;
      this.setState({
        name: this.state.name,
        hwData: newHWData,
        editorSettings: this.state.editorSettings
      });
    });
    this.onCancel();
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", {
      class: "mui-appbar"
    }, /* @__PURE__ */ React.createElement("label", {
      class: "mui--text-display3",
      id: "welcomeHeading"
    }, this.state.name, "'s Agenda")), /* @__PURE__ */ React.createElement("button", {
      class: "mui-btn mui-btn--raised mui-btn mui-btn--accent mui--text-center mui--text-black",
      onClick: (event) => this.openBlankEditor()
    }, "New Homework"), /* @__PURE__ */ React.createElement("div", {
      class: "mui-panel"
    }, /* @__PURE__ */ React.createElement("table", {
      class: "mui-table mui-table--bordered"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Homework"), /* @__PURE__ */ React.createElement("th", null, "Priority"), /* @__PURE__ */ React.createElement("th", null, "Course"), /* @__PURE__ */ React.createElement("th", null, "Due Date"), /* @__PURE__ */ React.createElement("th", null, "Complete?"))), /* @__PURE__ */ React.createElement("tbody", null, Object.values(this.state.hwData).map((hw) => /* @__PURE__ */ React.createElement(Assignment, {
      hwData: hw,
      onEdit: this.onEdit,
      onDelete: this.onDelete
    }))))), this.state.editorSettings.display && /* @__PURE__ */ React.createElement(EditorOverlay, {
      hwData: this.state.editorSettings.hwData,
      createNew: this.state.editorSettings.createNew,
      onSubmit: this.onSubmit,
      onCancel: this.onCancel
    }));
  }
}
export default App;
