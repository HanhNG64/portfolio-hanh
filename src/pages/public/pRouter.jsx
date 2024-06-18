import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '@utils/error';
import { PLayout, Home, Projects, ProjectDetail, ScrollToSection } from '@pages/public';

const PublicRouter = () => {
  return (
    <>
      <ScrollToSection />
      <Routes>
        <Route element={<PLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":id" element={<ProjectDetail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default PublicRouter;
