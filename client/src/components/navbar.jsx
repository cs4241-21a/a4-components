import React, { useContext } from "react";

import { LoginContext } from "../context/LoginContextProvider";

const Navbar = ({ user }) => {
    const { logout } = useContext(LoginContext);

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
                                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => { logout() }}>Logout</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;