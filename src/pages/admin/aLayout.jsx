import React from 'react';
import { Outlet } from 'react-router';
import Header from '@components/admin/header';
import Footer from '@components/admin/footer';

const ALayout = () => {
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

export default ALayout;
