import React, { useEffect, useRef, useState } from 'react';
import { projectService } from '@services';
import ABout from '@components/public/about';
import SlideShow from '@components/public/slideShow';
import Skills from '@components/public/skills';
import Loader from '@components/public/loader';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const flag = useRef(false);

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

  const images = () => {
    return projects.map((project) => project.image).filter((url) => url);
  };

  return (
    <div className="max-container main-padding-top">
      <ABout />
      <SlideShow pictures={images()} />
      <Skills />
    </div>
  );
};

export default Home;
