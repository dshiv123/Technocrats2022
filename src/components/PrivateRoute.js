import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({  children,allowedrole}) => {
    // Use Selector
    return localStorage.getItem("user")&& (allowedrole===undefined || allowedrole.includes(JSON.parse(localStorage["user"]).role))? children : <Navigate to="/" />;
    //return localStorage.getItem("user")&& (allowedrole===undefined || isExist(allowedrole,JSON.parse(localStorage["user"]).role))? children : <Navigate to="/" />;
};

export default PrivateRoute;