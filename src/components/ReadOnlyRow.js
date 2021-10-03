import React from "react";

const ReadOnlyRow = ({ assignment, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{assignment.assignment}</td>
      <td>{assignment.course}</td>
      <td>{assignment.percentage}</td>
      <td>{assignment.priority}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, assignment)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(assignment.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
