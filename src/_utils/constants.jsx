const API_URL = `${import.meta.env.VITE_API_URL}`;
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  USERS: `${API_URL}/api/users`,
  PROJECTS: `${API_URL}/api/projects`,
  CONTACTS: `${API_URL}/api/contacts`,
};
