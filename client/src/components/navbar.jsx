import React, { useContext } from "react";
import { useHistory } from "react-router";

import { LoginContext } from "../context/LoginContextProvider";

const Navbar = ({ user }) => {
    const history = useHistory();
    const { logout } = useContext(LoginContext);

    // Navbar logout callback
    const onLogout = () => {
        fetch('/api/logout', {
            method: 'GET',
            credentials: 'include'
        }).then(async (response) => {
            const data = await response.json();
            if (data.loggedOut) {
                logout();
                history.push('/login');
            }
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Navbar">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars"
                    aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbars">
                </div>
                {/* Right navbar */}

                {
                    user &&
                    <div className="ms-auto">
                        <span className="navbar-text">Hello {user.username}!</span>
                    </div>
                }

                <div className="ms-auto">
                    <ul className="navbar-nav ms-auto">
                        {
                            !user &&
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </>
                        }
                        {
                            user &&
                            <li className="nav-item">
                                <button className="nav-link" 
                                style={{ backgroundColor: 'transparent', border: '0px solid black' }} onClick={onLogout}>
                                    Logout
                                </button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;