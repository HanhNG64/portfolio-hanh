import React, { useEffect, useRef, useState } from 'react';
import { projectService } from '@services';
import Card from '@components/public/card';
import Loader from '@components/public/loader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const flag = useRef(false);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (flag.current === false) {
          const projects = await projectService.getAllProjects();
          setProjects(projects.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoad(true);
      }
    };
    fetchProjects();
    return () => (flag.current = true);
  }, []);

  if (!isLoad) {
    return <Loader />;
  }

  return (
    <div className="max-container main-padding-top main-padding-bottom main-padding-x">
      <div className="w-fit mx-auto md:ml-0">
        <h1>Les projets réalisés</h1>
      </div>
      <section className="mt-14 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
