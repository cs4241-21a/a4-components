import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Index from "./views/Index.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";


export default function App() {

    return (
        <Switch>
            <Route exact path='/' component={Index}/>

            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Register}/>

            <Redirect from="*" to="/"/>
        </Switch>
    );

};
