import React, { useState } from "react";

const EventTableRow = (props) => {
  const [removed, setRemoved] = useState(false);

  const id = props.event._id;
  const name = props.event["name"];
  const date = props.event["date"] || "N/A";
  const time = props.event["time"] || "N/A";
  const attendance = props.event["attendance"] ? "✓" : "✖";

  const onDelete = () => {
    const body = JSON.stringify({id});

    fetch("/delete", {
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body 
    });
    setRemoved(true);
  }

  return (
    <tr id={id} class="table-row" hidden={removed}>
      <td class="align-middle">{name}</td>
      <td class="align-middle">{date}</td>
      <td class="align-middle">{time}</td>
      <td class="align-middle">{attendance}</td>
      <td class="icon-button-cell">
        <div class="icon-button-container">
          <button class="icon-button" onClick={props.onClickEdit} >
            <img class="icon edit-icon" src="img/edit.svg" title="Edit Entry" />
          </button>
          <button class="icon-button" onClick={onDelete}>
            <img class="icon delete-icon" src="img/delete.svg" title="Delete Entry" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default EventTableRow;