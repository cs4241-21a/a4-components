import React from "react";

class EditorOverlay extends React.Component {

    clearInputBoxes() {
        const inputs = document.querySelectorAll('input'),
                prioritySelect = document.getElementById('homeworkPriority'),
                notesText = document.getElementById('homeworkNotes'),
                completedRadio = document.getElementById('homeworkComplete'),
                incompleteRadio = document.getElementById('homeworkIncomplete')

        for(const input of inputs) {
            input.value = ""
        }

        prioritySelect.value = "None"

        notesText.value = ""

        completedRadio.checked = ""
        incompleteRadio.checked = "checked"
    }
    
    onCancel(event) {
        event.preventDefault()
        this.clearInputBoxes()
        this.props.onCancel()
    }

    onSubmit(event) {
        event.preventDefault()

        const nameInput = document.getElementById('homeworkName'),
            courseInput = document.getElementById('homeworkCourse'),
            dueDateInput = document.getElementById('homeworkDue'),
            prioritySelect = document.getElementById('homeworkPriority'),
            notesText = document.getElementById('homeworkNotes'),
            completedRadio = document.getElementById('homeworkComplete'),
            homework = {
              name: nameInput.value,
              course: courseInput.value,
              dueDate: dueDateInput.value,
              priority: prioritySelect.value,
              notes: notesText.value,
              complete: completedRadio.checked ? true : false,
            }

        if(this.props.createNew) {
            // Calculate submission time
            let currDate = new Date()
            homework.subDate = currDate.toISOString()
        }
        else {
            homework.subDate = this.props.hwData.subDate
        }

        this.props.onSubmit(homework)
    }

    render() {
        return (
            <div class="mui-panel mui-container" id="overlay">
                <form class="mui-form">
                    <legend class="mui--text-center">Homework Editor</legend>
                    <label for="homeworkName">Homework Name:</label>
                    <div class="mui-textfield">
                        <input type='text' id='homeworkName' placeholder="Homework name" defaultValue={this.props.hwData.name}/>
                    </div>

                    <label for="homeworkCourse">Course Name:</label>
                    <div class="mui-textfield">
                        <input type='text' id='homeworkCourse' placeholder="Course" defaultValue={this.props.hwData.course}/>
                    </div>

                    <label for="homeworkDue">Due Date:</label>
                    <div class="mui-textfield">
                        <input type='text' id='homeworkDue' placeholder="Due Date" defaultValue={this.props.hwData.dueDate}/>
                    </div>

                    <div class="mui-select">
                        <label for="homeworkPriority">Priority Level:</label>
                        <select id="homeworkPriority" defaultValue={this.props.hwData.priority}>
                            <option value="None">None</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div class="mui-textfield">
                        <textarea type='text' id='homeworkNotes' placeholder="Notes" defaultValue={this.props.hwData.notes}></textarea>
                    </div>
                    
                    <div class="mui--text-center">
                        <form class="mui-radio" >
                            <label>
                                <input type='radio' id='homeworkIncomplete' name="options" value="incomplete" defaultChecked={!this.props.hwData.complete}/>
                                Incomplete
                            </label>
                            <label>
                                <input type='radio' id='homeworkComplete' name="options" value="complete" defaultChecked={this.props.hwData.complete}/>
                                Complete
                            </label>
                        </form>
                    </div>

                    <div class="mui--text-center">
                        <button class="mui-btn"
                                type="reset"
                                id="newHWCancel"
                                onClick={e => this.onCancel(e)}>
                            Cancel
                        </button>
                        <button class="mui-btn mui-btn--primary mui-btn--raised"
                                type="submit"
                                onClick={e => this.onSubmit(e)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditorOverlay;