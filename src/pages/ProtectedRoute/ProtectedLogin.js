import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';

const ProtectedLogin = ({ children }) => {
    const { currentUser, loading } = useContext(UserContext)
    // if (loading) return <h1>Loading</h1>
    if (!currentUser) return children
    else { return <Navigate to='/' /> }
};

export default ProtectedLogin;