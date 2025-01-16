import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Private = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(user?.role === "admin"){
        return children;
    }
    return <Navigate state={location.pathname} to={'/'}></Navigate>
};

export default Private;