import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth() || {}; // Asegúrate de que useAuth nunca devuelva null

  // Si currentUser es null o undefined, redirige al usuario a la página de login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Si currentUser existe, renderiza los children
  return children;
}

export default PrivateRoute;