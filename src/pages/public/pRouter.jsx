import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '@utils/error';
import { PLayout, Home, Projects, ProjectDetail } from '@pages/public';

const PublicRouter = () => {
  return (
    <>
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
