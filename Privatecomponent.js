import React from "react";
import {Navigate, Outlet} from 'react-router-dom'
const Privatecomponent=()=>{
    const auth=localStorage.getItem('users');
    return auth?<Outlet />:<Navigate to="/Signup" />
    return <Outlet />
}
export default Privatecomponent;
