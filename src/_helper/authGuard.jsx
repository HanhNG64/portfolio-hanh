import React from 'react';
import { Navigate } from 'react-router';
import { accountService } from '@services';

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default AuthGuard;
