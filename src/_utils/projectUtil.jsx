import { useState, useEffect } from 'react';
import { projectService } from '@services';

export function useFetchProjectImages() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await projectService.getAllProjectImages();
        const images = await response.json();
        setProjects(images.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { projects, isLoading, error };
}

export function useFetchProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await projectService.getAllProjects();
        const projects = await response.json();
        setProjects(projects.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { projects, isLoading, error };
}

export function useFetchOneProject(id) {
  const [project, setProject] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await projectService.getProject(id);
        const project = await response.json();
        setProject(project.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { project, isLoading, error };
}
