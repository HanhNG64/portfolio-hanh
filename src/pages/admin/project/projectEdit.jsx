import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { projectService, accountService } from '@services';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '@components/admin/projectForm';
import Loader from '@components/public/loader';

const ProjectEdit = () => {
  let { id } = useParams();
  const [project, setProject] = useState();
  const flag = useRef(false);
  const [isLoad, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (flag.current === false) {
          if (accountService.isLogged()) {
            const result = await projectService.getProject(id);
            setProject(result.data);
            setLoad(true);
          }
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };
    fetchProject();
    return () => (flag.current = true);
  }, []);

  let updateProject = async (data) => {
    const newProject = {
      title: data.title,
      subTitle: data.subTitle,
      image: data.image,
      description: data.description,
      problematic: data?.problematic,
      site: data.site,
      github: data.github,
      technologies: data.technologies,
    };

    let newData = new FormData();
    newData.append('project', JSON.stringify(newProject));
    if (data.file[0]) {
      newData.append('image', data.file[0]);
    }
    await projectService.updateProject(accountService.getToken(), newData, id);
  };

  const onSubmit = async (data) => {
    try {
      await updateProject(data);
      navigate('../.');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isLoad) {
    return <Loader />;
  }

  return (
    <>
      <div className="pt-20">
        <h2 className="mb-12 text-center">Modifier un nouveau projet</h2>
      </div>
      <ProjectForm submit={onSubmit} project={project} />;
    </>
  );
};

export default ProjectEdit;
