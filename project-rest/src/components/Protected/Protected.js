import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Protected(props) {
    const { isLogin } = useSelector((state) => state.ProductReducer);

    if (isLogin === null || !localStorage.getItem('token')) {
        return <Navigate to="/login" />;
    }

    return props.children;
}

export default Protected;