import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        <progress className="progress w-60 text-center"></progress>
    };

    if (user) {
        return children;
    };
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;