import { apiService } from './api.service';

let login = async (credentials) => {
  return apiService.postCredentials(credentials);
};

const saveToken = (token) => {
  localStorage.setItem('token', token);
};

const getToken = () => {
  return localStorage.getItem('token');
};

const logout = () => {
  localStorage.removeItem('token');
};

const isLogged = () => {
  let token = localStorage.getItem('token');
  return !!token;
};

export const accountService = { login, saveToken, getToken, logout, isLogged };
