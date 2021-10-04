import React from "react";
import EditorOverlay from "./EditorOverlay"
import Assignment from "./Assignment"

const hwAPIPath = "/agenda/data"

class App extends React.Component {
    getNewEditorSettings(display=false, createNew=true, hwData={}) {
        return {
            display: display,
            createNew: createNew,
            hwData: hwData
        }
    }
    
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            hwData: {},
            editorSettings: this.getNewEditorSettings()
        }
        this.load()

        this.onCancel = this.onCancel.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    load() {
        // Request list of homework stored on server
        fetch(hwAPIPath, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                name: res.name,
                hwData: res.data,
                editorSettings: this.getNewEditorSettings(),
            })
        })
    }

    openBlankEditor() {
        // Sets display in editor settings to true and clears values
        this.setState({
            name: this.state.name,
            hwData: this.state.hwData,
            editorSettings: this.getNewEditorSettings(true),
        })
    }

    onEdit(hwData) {
        // Sets display in editor settings to false and fills values first
        this.setState({
            name: this.state.name,
            hwData: this.state.hwData,
            editorSettings: this.getNewEditorSettings(false, false, hwData),
        })

        // Now display the editor
        this.setState({
            name: this.state.name,
            hwData: this.state.hwData,
            editorSettings: this.getNewEditorSettings(true, false, hwData),
        })
    }

    onDelete(hwData) {
        const body = JSON.stringify(hwData)
        fetch( hwAPIPath, {
            method:'DELETE',
            headers: {
            "Content-Type": "application/json"
            },
            body,
        })
        .then( response => {
            // Get DELETE response to confirm success
            if(response.status === 200) {
                let newHWData = this.state.hwData
                delete newHWData[hwData.subDate]
                this.setState({
                    name: this.state.name,
                    hwData: newHWData,
                    editorSettings: this.state.editorSettings,
                })
            }
        })
    }

    onCancel() {
        // Clear editor settings
        this.setState({
            name: this.state.name,
            hwData: this.state.hwData,
            editorSettings: this.getNewEditorSettings(),
        })
    }

    onSubmit(hwData) {
        const body = JSON.stringify(hwData)
        console.log(this)
        fetch( hwAPIPath, {
            method: this.state.editorSettings.createNew ? 'POST' : 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body
        })
        .then( res => res.json())
        .then(homework => {
            let newHWData = this.state.hwData
            newHWData[homework.subDate] = homework
            this.setState({
                name: this.state.name,
                hwData: newHWData,
                editorSettings: this.state.editorSettings,
            })
        })

        // Clean up editor UI
        this.onCancel()
    }

    render() {
        return (
            <div>
                <header class="mui-appbar">
                <label class="mui--text-display3" id="welcomeHeading">
                    {this.state.name}'s Agenda
                </label>
                </header>

                <button class="mui-btn mui-btn--raised mui-btn mui-btn--accent mui--text-center mui--text-black"
                        onClick={event => this.openBlankEditor()}>
                    New Homework
                </button>

                <div class="mui-panel">
                    <table class="mui-table mui-table--bordered">
                        <thead>
                            <tr>
                            <th>Homework</th>
                            <th>Priority</th>
                            <th>Course</th>
                            <th>Due Date</th>
                            <th>Complete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(this.state.hwData).map(hw =>
                                <Assignment hwData={hw}
                                            onEdit={this.onEdit}
                                            onDelete={this.onDelete}/> 
                            )}
                        </tbody>
                    </table>
                </div>

                { this.state.editorSettings.display &&
                    (<EditorOverlay hwData={this.state.editorSettings.hwData}
                                    createNew={this.state.editorSettings.createNew}
                                    onSubmit={this.onSubmit}
                                    onCancel={this.onCancel}/>)
                }
            </div>
        )
    }
}

export default App;