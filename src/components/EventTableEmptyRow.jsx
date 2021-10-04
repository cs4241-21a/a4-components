import React from "react";

const EventTableEmptyRow = (props) => {
  return (
    <tr id="empty-row">
      <td class="align-middle">—</td>
      <td class="align-middle">—</td>
      <td class="align-middle">—</td>
      <td class="align-middle">—</td>
      <td class="icon-button-cell">
        <div class="icon-button-container">
          <button id="add-button" class="icon-button" onClick={props.onClickAdd}>
              <img title="Add Entry" class="icon add-icon" src="img/add-file.svg" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default EventTableEmptyRow;