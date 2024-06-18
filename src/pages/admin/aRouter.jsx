import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '@utils/error';
import { ALayout } from '@pages/admin';
import { User, UserAdd, UserEdit } from '@pages/admin/user';
import { Project, ProjectAdd, ProjectEdit } from '@pages/admin/project';

const ARouter = () => {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route index element={<Project />} />
        <Route path="project">
          <Route index element={<Project />} />
          <Route path="add" element={<ProjectAdd />} />
          <Route path="edit/:id" element={<ProjectEdit />} />
        </Route>
        <Route path="user">
          <Route index element={<User />} />
          <Route path="add" element={<UserAdd />} />
          <Route path="edit/:id" element={<UserEdit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default ARouter;
