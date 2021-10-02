import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Navbar from "../components/Navbar";
import GithubOAuth from "../components/GithubOAuth";
import { LoginContext } from "../context/LoginContextProvider";

const LoginPage = () => {
    const history = useHistory();
    const { token, login } = useContext(LoginContext);

    const [state, setState] = useState({
        formData: { username: '', password: '' },
        errors: { username: null, password: null }
    });

    // Redirect to todolist page if logged in
    useEffect(() => {
        if (token) {
            history.push(`/user/${jwt_decode(token).id}`);
        }
    }, [token, history]);

    // Set state on input field change
    const onInputChange = (name, value) => {
        setState({
            ...state,
            formData: {
                ...state.formData,
                [name]: value
            }
        });
    };

    // Do api call on login form submission
    const onSubmit = () => {
        fetch(`http://localhost:3001/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: state.formData.username,
                password: state.formData.password
            })
        }).then(async function (response) {
            const data = await response.json();

            // Set any errors with user input
            if (data.errors) {
                setState({
                    ...state,
                    errors: {
                        ...state.errors,
                        ...data.errors
                    }
                });
                return;
            }

            // Redirect to todo list page on login
            if (data.status && data.status === 'success') {
                login(data.token);
                history.push(`/user/${data.id}`)
            }
        }).catch((err) => {
            alert('Login Request failed');
        });
    };

    return (
        <>
            <Navbar user={token && jwt_decode(token)} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 offset-md-2 col-md-8">
                        <div className="p-5 mb-4 bg-light rounded-3 border">
                            <h2 className="text-center">Login</h2>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-xs-12">
                                    {/* Login form */}
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        onSubmit();
                                    }}>
                                        <div className="form-group">
                                            <label className="small mb-1 mt-3" htmlFor="username">Username: </label>
                                            <input className="form-control"
                                                placeholder="Enter Your Username" name="username" type="text"
                                                value={state.formData.username} onChange={(e) => {
                                                    onInputChange('username', e.target.value);
                                                }} required />
                                            {
                                                state.errors.username &&
                                                <p className="small text-danger">{state.errors.username}</p>
                                            }

                                            <label className="small mb-1 mt-3" htmlFor="password">Password: </label>
                                            <input className="form-control" placeholder="Password" name="password" type="password"
                                                onChange={(e) => {
                                                    onInputChange('password', e.target.value);
                                                }} required />
                                            {
                                                state.errors.password &&
                                                <p className="small text-danger">{state.errors.password}</p>
                                            }

                                            <button className="mt-3 btn btn-primary" type="submit" onSubmit={(e) => {
                                                e.preventDefault();
                                                onSubmit();
                                            }}>Log in</button>
                                            <GithubOAuth />
                                            <p className="m=0 bg-dark text-light p-2 my-1 rounded rounded-5">Don't have an account?
                                                <a href="/register" className="link-info"> Sign up here</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;