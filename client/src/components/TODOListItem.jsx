import React from "react";

const TODOListItem = ({ task, i, editTask, delTask }) => {
    return (
        <tr key={task._id}>
            <td>
                <label className="d-inline" htmlFor={`title-${i}`} aria-label="Task Title Input"></label>
                <input className='form-control' id={`title-${i}`} type="text" defaultValue={task.title} />
            </td>
            <td>
                <label className="d-inline" htmlFor={`description-${i}`} aria-label="Task Description Input"></label>
                <input className='form-control' id={`description-${i}`} type="text" defaultValue={task.description} />
            </td>
            <td>
                <label className="d-inline" htmlFor={`priority-${i}`} aria-label="Task Priority Input"></label>
                <input className='form-control' type="number" id={`priority-${i}`} min="0" max="10" defaultValue={task.priority} />
            </td>
            <td>
                <label className="d-inline" htmlFor={`dateCreated-${i}`} aria-label="Task Date Created"></label>
                <input className='form-control' id={`dateCreated-${i}`} type="text" value={task.dateCreated} readOnly />
            </td>
            <td>
                <label className="d-inline" htmlFor={`deadline-${i}`} aria-label="Task Deadline"></label>
                <input className='form-control' id={`deadline-${i}`} type="text" value={task.deadline} readOnly />
            </td>
            <td>
                <div className="btn-group">
                    <button onClick={(e) => { editTask(i, task.title) }} className="btn btn-warning">Save
                        Edits</button>
                    <button onClick={(e) => { delTask(task.title) }} className="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    );
}

export default TODOListItem;