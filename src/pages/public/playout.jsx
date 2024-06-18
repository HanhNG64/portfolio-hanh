import React from 'react';
import { Outlet } from 'react-router';
import Header from '@components/public/header';
import Footer from '@components/public/footer';

const PLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PLayout;
