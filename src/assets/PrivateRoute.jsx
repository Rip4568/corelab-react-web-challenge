/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token !== null;
  console.log('isAuthenticated : ' + isAuthenticated + token + '\n' + token);
  return isAuthenticated ? children : <Navigate to={redirectTo} />
  
}

export default PrivateRoute;