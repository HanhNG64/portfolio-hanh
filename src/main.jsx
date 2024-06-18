import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PRouter from '@pages/public/pRouter';
import ARouter from '@pages/admin/aRouter';
import AuthRouter from '@pages/auth/authRouter';
import AuthGuard from '@helper/authGuard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PRouter />} />
        <Route
          path="/admin/*"
          element={
            <AuthGuard>
              <ARouter />
            </AuthGuard>
          }
        />
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
