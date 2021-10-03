import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

let appdata = [{'id': 1, 'assignment': 'Example Assignment', 'course': 'Fake Course', 'percentage': 5, 'priority': "Low"}];

function calculatePriority(percentage) {
  if(percentage >= 20)
    return "High";
  else
    if(percentage < 10)
      return "Low";
    else 
      return "Medium";
}

const App = () => {
    
    useEffect(() => {
        let assignments = window.localStorage.getItem('assignmentManager');
        setAssignments(JSON.parse(assignments));
       }, []);
       
  useEffect(() => {
    window.localStorage.setItem('assignmentManager', JSON.stringify(assignments));
   });

   


  const [assignments, setAssignments] = useState(appdata);

  const [addFormData, setAddFormData] = useState({
    assignment: "",
    course: "",
    percentage: "",
    priority: ""
  });

  const [editFormData, setEditFormData] = useState({
    assignment: "",
    course: "",
    percentage: "",
    priority: ""
  });

  const [editAssignmentId, setEditAssignmentId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    
    if(fieldName === "percentage")
    {
      newFormData["priority"] = calculatePriority(event.target.value);
    }

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newAssignment = {
      id: nanoid(),
      assignment: addFormData.assignment,
      course: addFormData.course,
      percentage: addFormData.percentage,
      priority: calculatePriority(addFormData.percentage),
    };

    const newAssignments = [...assignments, newAssignment];
    setAssignments(newAssignments);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedAssignment = {
      id: editAssignmentId,
      assignment: editFormData.assignment,
      course: editFormData.course,
      percentage: editFormData.percentage,
      priority: calculatePriority(editFormData.percentage),
    };

    const newAssignments = [...assignments];

    const index = assignments.findIndex((assignment) => assignment.id === editAssignmentId);

    newAssignments[index] = editedAssignment;

    setAssignments(newAssignments);
    setEditAssignmentId(null);
  };

  const handleEditClick = (event, assignment) => {
    event.preventDefault();
    setEditAssignmentId(assignment.id);

    const formValues = {
      assignment: assignment.assignment,
      course: assignment.course,
      percentage: assignment.percentage,
      priority: calculatePriority(assignment.percentage),
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditAssignmentId(null);
  };

  const handleDeleteClick = (assignmentId) => {
    const newAssignments = [...assignments];

    const index = assignments.findIndex((assignment) => assignment.id === assignmentId);

    newAssignments.splice(index, 1);

    setAssignments(newAssignments);
  };

  
  return (
    <div className="app-container">
      <h1>Homework Agenda</h1>
      <h2>Add an Assignment</h2>
      <h3>Name Course Percentage</h3>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="assignment"
          required="required"
          placeholder="Enter an assignment..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="course"
          required="required"
          placeholder="Enter a course..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="percentage"
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Course</th>
              <th>Percentage</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <Fragment key = {Math.random().toString(36).substr(2, 9)}>
                {editAssignmentId === assignment.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    assignment={assignment}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
