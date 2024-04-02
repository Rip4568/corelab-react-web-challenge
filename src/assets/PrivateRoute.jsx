/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isAuthenticated = token !== null;
  return isAuthenticated ? children : <Navigate to={redirectTo} state={{ from: location }} replace />
}

export default PrivateRoute;