import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '@pages/auth/login';
import Error from '@utils/error';

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AuthRouter;
