import React from "react";

const EventTableRow = (props) => {
  const id = props.event._id;
  const name = props.event["name"];
  const date = props.event["date"] || "N/A";
  const time = props.event["time"] || "N/A";
  const attendance = props.event["attendance"] ? "✓" : "✖";

  // Add Onclick functionality for Buttons !!!

  return (
    <tr id={id} class="table-row">
      <td class="align-middle">{name}</td>
      <td class="align-middle">{date}</td>
      <td class="align-middle">{time}</td>
      <td class="align-middle">{attendance}</td>
      <td class="icon-button-cell">
        <div class="icon-button-container">
          <button class="icon-button">
            <img class="icon edit-icon" src="img/edit.svg" title="Edit Entry" />
          </button>
          <button class="icon-button">
            <img class="icon delete-icon" src="img/delete.svg" title="Delete Entry" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default EventTableRow;