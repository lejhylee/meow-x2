import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "./Login";
import Main from "../Main/Main";
    
function Routes() {
    let isAuthorized = sessionStorage.getItem("isAuthorized");

    return (
        <div>
            {!isAuthorized ? <Redirect to="login"/> : <Redirect to="/" />}
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </div>  
    );
} 
export default Routes;