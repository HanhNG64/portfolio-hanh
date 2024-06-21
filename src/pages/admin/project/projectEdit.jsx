import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { projectService, accountService } from '@services';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '@components/admin/projectForm';
import Loader from '@components/public/loader';

const ProjectEdit = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState();
  const flag = useRef(false);
  const [isLoad, setLoad] = useState(false);
  const [info, setInfo] = useState({ message: '', success: true });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (flag.current === false) {
          if (accountService.isLogged()) {
            const result = await projectService.getProject(id);
            const project = await result.json();
            setProject(project.data);
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
      image_cover: data.image_cover,
      image_min: data.image_min,
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
    return await projectService.updateProject(accountService.getToken(), newData, id);
  };

  const onSubmit = async (data) => {
    try {
      const reponse = await updateProject(data);
      if (reponse.ok) {
        navigate('../.');
      } else {
        setInfo({ message: 'La modification a échoué.', success: false });
      }
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
      {info.message && (
        <div
          className={`bg-${info.success ? 'green' : 'red'}-100 border ${
            info.success ? 'border-green-400 text-green-700' : 'border-red-400 text-red-700'
          } px-4 py-3 rounded mb-4" role="alert" mb-4 max-w-[800px] md:w-[70%] flex items-center justify-center`}
        >
          {info.message}
        </div>
      )}
      <ProjectForm submit={onSubmit} project={project} />;
    </>
  );
};

export default ProjectEdit;
