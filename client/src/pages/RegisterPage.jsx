import React, { useEffect, useContext, useState, useCallback } from "react";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";

import Navbar from '../components/Navbar';
import GithubOAuth from "../components/GithubOAuth";
import { LoginContext } from "../context/LoginContextProvider";

const RegisterPage = () => {
    const history = useHistory();
    const { token, login } = useContext(LoginContext);
    const [state, setState] = useState({
        formData: {
            username: '',
            password: '',
            confirmPassword: ''
        },
        errors: {
            username: null,
            password: null
        }
    });

    // Redirect to todolist page if user already logged in
    useEffect(() => {
        if (token) {
            history.push(`/user/${jwt_decode(token).id}`);
        }
    });

    // Change state when user types in a text box
    const onInputChange = useCallback((name, value) => {
        setState({
            ...state,
            formData: {
                ...state.formData,
                [name]: value
            }
        });
    }, [state, setState]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        console.log('Register form submission');

        fetch(`/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: state.formData.username,
                password: state.formData.password,
                confirmPassword: state.formData.confirmPassword
            })
        })
            .then(async function (response) {
                const data = await response.json();

                if (data.status && data.status === 'success') {
                    login(data.token);
                    history.push(`/user/${data.userId}`);
                }

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
            });
    }, [state, history, login]);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 offset-md-2 col-md-8">
                        <div className="p-5 mb-4 bg-light rounded-3 border">
                            <h2 className="text-center">Register</h2>
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    {/* <!-- Register form --> */}
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">

                                            <label className="small mb-1 mt-3" htmlFor="username">Username: </label>
                                            <input className="form-control" placeholder="Enter Your Username" name="username" type="text"
                                                onChange={(e) => {
                                                    onInputChange('username', e.target.value);
                                                }}
                                                required
                                                defaultValue={state.formData ? state.formData.username : ''} />
                                            {
                                                state.errors && state.errors.username &&
                                                <p className="small text-danger">{state.errors.username}</p>
                                            }

                                            <label className="small mb-1 mt-3" htmlFor="password">Password: </label>
                                            <input className="form-control"
                                                placeholder="Password" name="password" type="password"
                                                onChange={(e) => {
                                                    onInputChange('password', e.target.value);
                                                }}
                                                required />

                                            <label className="small mb-1 mt-3" htmlFor="password">Confirm Password: </label>
                                            <input className="form-control"
                                                placeholder="Confirm Password" name="confirmPassword" type="password"
                                                onChange={(e) => {
                                                    onInputChange('confirmPassword', e.target.value);
                                                }}
                                                required />
                                            {
                                                state.errors && state.errors.password &&
                                                <p className="small text-danger">{state.errors.password}</p>
                                            }

                                            <button className="mt-3 btn btn-primary" type="submit" onSubmit={onSubmit}>Register</button>

                                            <GithubOAuth />

                                            <p className="bg-dark text-light p-2 my-2 rounded rounded-5" >Already have an account?
                                                <a href="/login" className="link-info"> Log in here</a>
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
}

export default RegisterPage;