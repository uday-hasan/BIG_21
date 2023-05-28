import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { currentUser, loading } = useContext(UserContext);
    if (loading) return <h1>Loading</h1>
    if (currentUser && currentUser.emailVerified) return children;
    else {
        return <Navigate to={'/login/signin'} />
    }
};

export default ProtectedRoute;