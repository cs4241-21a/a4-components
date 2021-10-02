import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';

import Navbar from '../components/Navbar';
import { LoginContext } from "../context/LoginContextProvider";
import TODOListItem from "../components/TODOListItem";

const TODOListPage = () => {
    const history = useHistory();
    const { userId } = useParams();
    const [state, setState] = useState({ tasks: [] });
    const { token, login } = useContext(LoginContext);

    // Get all user tasks from the server
    const getTasks = useCallback(() => fetch(`/user/${userId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: token
        })
    }).then(async (response) => {
        const data = await response.json();

        if (data.errors && (data.errors.login || data.errors.user))
            history.push('/login');
        if (data.errors) {
            console.log(data.errors)
            alert('An error occured');
            return;
        }

        setState({
            tasks: data.map(e => Object.assign({}, e))
        });
    }).catch((err) => {
        alert('Cannot fetch tasks');
        console.log(err);
    }), [token, history, userId]);

    // Get all user tasks from the server
    useEffect(() => {

        if (!token) {
            let loggedIn = false;

            fetch('/user/check-auth', {
                method: 'POST',
                credentials: 'include'
            }).then(async (response) => {
                const data = await response.json();

                console.log(data);
                if (data.errors) {
                    history.push('/login');
                    console.log('push to login1');
                    return;
                }


                if (data.token) {
                    login(data.token);
                    loggedIn = true;
                }

            }).catch(() => {
                history.push('/login');
                console.log('push to login2');
                return;
            });

            if (!loggedIn) return;
        }

        fetch(`/user/exists`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: userId
            })
        }).then(async (response) => {
            const data = await response.json();
            console.log(data);

            if (data.errors) {
                history.push(`/user/${jwt_decode(token).id}`);
                return;
            }

            getTasks();
        })

    }, [token, userId, getTasks, history, login]);

    // Callback to edit a task
    const editTask = async (i, title) => {

        const index = parseInt(i);
        const priority = document.querySelector(`#priority-${index}`);

        // Verify priority input is ok
        if ((!priority.valueAsNumber && priority.valueAsNumber !== 0) || priority.valueAsNumber < 0 || priority.valueAsNumber > 10) {
            alert('Priority must be 0 - 10');
            return;
        }

        // Send request to server
        fetch(`/user/${userId}/edit`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                oldTitle: title,
                newTitle: document.querySelector(`#title-${index}`).value,
                description: document.querySelector(`#description-${index}`).value,
                priority: priority.valueAsNumber,
                token: token
            })
        }).then(async (data) => {
            const tasks = await data.json();

            if (tasks.error) {
                alert(tasks.error);
                return;
            }

            setState({
                tasks: tasks.map(e => Object.assign({}, e))
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    // Callback to delete a task
    const delTask = async (title) => {

        fetch(`/user/${userId}/delete`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, token: token })
        }).then(async (data) => {
            const tasks = await data.json();

            setState({
                tasks: tasks.map(e => Object.assign({}, e))
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    // Add task submit callback
    const submit = async function (e) {
        // prevent default form action from being carried out
        e.preventDefault();

        // Get and format today's date
        var today = new Date();
        const dateString = `${String(today.getMonth() + 1).padStart(2, '0')}/` +
            `${String(today.getDate()).padStart(2, '0')}/${today.getFullYear()}`;

        const title = document.querySelector('#title');
        const description = document.querySelector('#description');

        const priority = document.querySelector('#priority-range');
        if ((!priority.valueAsNumber && priority.valueAsNumber !== 0) || priority.valueAsNumber < 0 || priority.valueAsNumber > 10) {
            alert('Priority must be 0 - 10');
            return;
        }

        // Compile Data
        const json = {
            title: title.value,
            description: description.value,
            dateCreated: dateString,
            priority: priority.valueAsNumber,
            token: token
        };
        const body = JSON.stringify(json);

        // Send data
        fetch(`/user/${userId}/submit`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body
        })
            .then(async function (response) {
                const tasks = await response.json();

                if (tasks.error) {
                    alert(tasks.error);
                    return;
                }

                setState({
                    tasks: tasks.map(e => Object.assign({}, e))
                });
            });

        return false;
    }


    return (
        <div>
            <Navbar user={token && jwt_decode(token)} />
            <div className="container">
                <h1 className="display-1">TODO List</h1>
                <p className="lead">
                    Add tasks to a TODO list. All task titles must be
                    unique. The priority of each task must be 0 - 10
                    where a higher number means a higher priority.
                    You can edit tasks but they must be done one at a time.
                    Deadlines for each task are auto-generated by the
                    server based on the priority. Tasks are sorted in the
                    table by priority in descending order.
                </p>
                <div className="row">
                    <h2 className="h2">Tasks</h2>
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Task Title</th>
                                <th>Description</th>
                                <th>Priority</th>
                                <th>Date Created</th>
                                <th>Deadline</th>
                                {/* <!-- Col Holds buttons, Intentionally empty --> */}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="task-holder">
                            {
                                state.tasks && state.tasks.map((task, i) => (
                                    <TODOListItem task={task} i={i} editTask={editTask} delTask={delTask} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <form className="border border-dark border-3 rounded rounded-5 p-3">
                    <h3 className="h3">Add a Task</h3>
                    <label htmlFor="title" className="form-label mt-3">Title:</label>
                    <input className='form-control' type='text' name='title' id='title' placeholder="title" required />
                    <label htmlFor="description" className="form-label mt-3">Description(optional):</label>
                    <input className='form-control' type="text" name="description" id="description" placeholder="description" />
                    <label htmlFor="priority-range" className="form-label mt-3">Priority (0 - 10):</label>
                    <input id='priority-range' type="range" className="form-range" min="0" max="10" step="1" defaultValue='5' />
                    <button id="addTask-btn" className="btn btn-primary btn-lg mt-3" onClick={submit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default TODOListPage;