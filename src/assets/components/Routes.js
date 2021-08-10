import React from "react";
import { Router, Switch,Route } from "react-router";

import Login from "../../paginas/login/login";
import Register from "../../paginas/register/register";
import Dash from "../../paginas/dash/dash";
import { history } from "../../history";
import NotFound from "./notFound";
import PrivateRoute from "./PrivateRoute"



const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login}exact path="/login" />
            <Route component={Register}exact path="/register" />
            <PrivateRoute component={Dash}exact path="/dash" />
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)
export default Routes