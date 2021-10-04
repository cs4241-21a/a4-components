import React from "react";
import {Link} from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.submitRegForm = this.submitRegForm.bind(this);
    }

    submitRegForm(e) {
        e.preventDefault();

        const json = this.state;

        fetch("/reg", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json),
        }).then(response => response.json())
            .then(data => {
                if (data.code !== 200) {
                    alert(data.msg);
                } else {
                    window.location.href = '/';
                }
            });
    }

    render() {
        return (
            <>
                <div className="boxHolder">
                    <div className="box">
                        <h1>Sign Up</h1>
                        <Link to="/login">Login</Link>
                    </div>
                </div>

                <div className="boxHolder">
                    <div className="box">
                        <form id="newTrip" onSubmit={this.submitRegForm}>
                            <h2>Sign Up</h2>

                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                required
                                value={this.state.username}
                                onChange={(e) => {this.setState({username: e.target.value})}}
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                required
                                value={this.state.password}
                                onChange={(e) => {this.setState({password: e.target.value})}}
                            />

                            <button id="submitReg">Sign Up</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
