import React from "react";
import ReactDOM from "react-dom";

class Register extends React.Component {
    //Make a block of HTML using the jsx format
    render(){
        return (
        <form action='/register' classname="register" class="loginForm" method='POST'>
            <label>New player?</label>
            <label> Create your account here!</label>
            <div class="loginTextDiv">
            <input type='text' class="nes-input loginText" name='username' placeholder="Username"></input>
            </div>
            <div class="loginTextDiv">
            <input type='password' class="nes-input loginText" name='password' placeholder="Password"></input>
            </div>
            <div class="loginButton">
            <button id="register" class="nes-btn">Register</button>
            </div>
        </form>
        )
    }
}

export default Register;