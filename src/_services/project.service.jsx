import { apiService } from './api.service';

let getAllProjectImages = async () => {
  return apiService.getAllProjectImages();
};

let getAllProjects = async () => {
  return apiService.getAllProjects();
};

let getProject = (id) => {
  return apiService.getProject(id);
};

let addProject = (token, project) => {
  return apiService.addProject(token, project);
};

let updateProject = (token, project, id) => {
  return apiService.updateProject(token, project, id);
};

let deleteProject = (token, id) => {
  return apiService.deleteProject(token, id);
};

let likeProject = (like, id) => {
  return apiService.likeProject(like, id);
};

export const projectService = { getAllProjectImages, getAllProjects, getProject, addProject, updateProject, deleteProject, likeProject };
