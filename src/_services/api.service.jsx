import { API_ROUTES } from '@utils/constants';

/* Users */

let postCredentials = async (credentials) => {
  const response = await fetch(`${API_ROUTES.SIGN_IN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return response;
};

let getAllUsers = async (token) => {
  const response = await fetch(`${API_ROUTES.USERS}`, {
    method: 'GET',
    headers: { authorization: `Bearer ${token}` },
  });

  return response;
};

let getUser = async (token, id) => {
  const response = await fetch(`${API_ROUTES.USERS}/${id}`, {
    method: 'GET',
    headers: { authorization: `Bearer ${token}` },
  });

  return response;
};

let addUser = async (token, user) => {
  const response = await fetch(`${API_ROUTES.SIGN_UP}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });

  return response;
};

let updateUser = async (token, user) => {
  const response = await fetch(`${API_ROUTES.USERS}/${user._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });

  return response;
};

let deleteUser = async (token, id) => {
  const response = await fetch(`${API_ROUTES.USERS}/${id}`, {
    method: 'DELETE',
    headers: { authorization: `Bearer ${token}` },
  });

  return response;
};

/* Projects */
let getAllProjects = async () => {
  const result = await fetch(`${API_ROUTES.PROJECTS}`);
  return await result.json();
};

let getProject = async (id) => {
  const result = await fetch(`${API_ROUTES.PROJECTS}/${id}`);
  return await result.json();
};

let addProject = async (token, project) => {
  const response = await fetch(`${API_ROUTES.PROJECTS}`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: project,
  });
  return response;
};

let updateProject = async (token, project, id) => {
  const response = await fetch(`${API_ROUTES.PROJECTS}/${id}`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: project,
  });

  return response;
};

let deleteProject = async (token, id) => {
  const response = await fetch(`${API_ROUTES.PROJECTS}/${id}`, {
    method: 'DELETE',
    headers: { authorization: `Bearer ${token}` },
  });

  return response;
};

let likeProject = async (like, id) => {
  const response = await fetch(`${API_ROUTES.PROJECTS}/${id}/like`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(like),
  });

  if (!response.ok) {
    throw new Error('Delete error');
  }

  const result = await response.json();
  return result.like;
};

/* Contacts */

let addContact = async (data) => {
  const response = await fetch(`${API_ROUTES.CONTACTS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};

export const apiService = {
  postCredentials,
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getAllProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
  likeProject,
  addContact,
};
