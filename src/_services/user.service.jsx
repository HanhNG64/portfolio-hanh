import { apiService } from './api.service';

let getAllUsers = async (token) => {
  return apiService.getAllUsers(token);
};

let getUser = (token, id) => {
  return apiService.getUser(token, id);
};
let addUser = (token, user) => {
  return apiService.addUser(token, user);
};

let updateUser = (token, user) => {
  return apiService.updateUser(token, user);
};

let deleteUser = (token, id) => {
  return apiService.deleteUser(token, id);
};

export const userService = { getAllUsers, getUser, addUser, updateUser, deleteUser };
