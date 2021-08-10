import React from "react";
import {Redirect, Route} from "react-router"


const PrivateRoute=props=>{
const islogged=localStorage.getItem('app-token')
return islogged ? <Route {...props}/> : <Redirect to="/login"/>

}
export default PrivateRoute