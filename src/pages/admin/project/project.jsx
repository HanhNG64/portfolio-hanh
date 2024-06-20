import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectService, accountService } from '@services';
import { Button, Tooltip } from '@material-tailwind/react';
import { LOGO } from '@utils/logoConstants';
import Loader from '@components/public/loader';

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const flag = useRef(false);
  const [isLoad, setLoad] = useState(false);
  const [projectActive, setProjectActive] = useState(null);
  const [info, setInfo] = useState({ message: '', success: true });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (flag.current === false) {
          if (accountService.isLogged()) {
            const result = await projectService.getAllProjects();
            const projects = await result.json();
            setProjects(projects.data);
            if (projects.data.length > 0) setProjectActive(projects.data[0]);
            setLoad(true);
          }
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
    return () => (flag.current = true);
  }, []);

  const deleteProject = async (id) => {
    try {
      const reponse = await projectService.deleteProject(accountService.getToken(), id);
      if (reponse.ok) {
        setProjects((current) => current.filter((project) => project._id !== id));
        if (projects.length > 0) setProjectActive(projects[0]);
      } else {
        setInfo({ message: 'Suppression refusée.', success: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isLoad) {
    return <Loader />;
  }
  const handleEditClick = () => {
    const isInProjects = location.pathname.includes('/project');
    const url = isInProjects ? `./edit/${projectActive._id}` : `project/edit/${projectActive._id}`;
    navigate(`${url}`);
  };

  return (
    <div className="max-container main-padding-top main-padding-bottom main-padding-x">
      {info.message && (
        <div
          className={`bg-${info.success ? 'green' : 'red'}-100 border ${
            info.success ? 'border-green-400 text-green-700' : 'border-red-400 text-red-700'
          } px-4 py-3 rounded mb-4" role="alert" mb-4 text-center`}
        >
          {info.message}
        </div>
      )}
      {projectActive && (
        <div className="flex flex-col justify-center items-center">
          <img className="h-[500px] w-full object-cover object-center" src={projectActive.image_cover} alt="image du projet" />
          <div className="flex flex-col justify-center items-center gap-2 mb-4">
            <p>{projectActive.title}</p>
            <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
              {projectActive.technologies &&
                projectActive.technologies[0].split(' ').map((skill, index) => (
                  <Tooltip key={index} content={skill}>
                    <span className="w-9 h-9 rounded-lg border border-primary flex justify-center items-center">
                      <img src={LOGO[skill.toUpperCase()] || LOGO.UNKNOWN} alt={skill} />
                    </span>
                  </Tooltip>
                ))}
            </div>
            <div className="flex flex-row gap-1 ">
              <Button
                variant="filled"
                onClick={() => {
                  deleteProject(projectActive._id);
                }}
                size="md"
                className="hover:text-secondary bg-primary"
              >
                Supprimer
              </Button>
              <Button variant="filled" size="md" className="hover:text-secondary bg-primary" onClick={handleEditClick}>
                Editer
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="anim-bar mr-16 mt-10 mb-10 w-full"></div>
      <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
          <p key={index} onClick={() => setProjectActive(project)} className="cursor-pointer hover:text-secondary">
            {project.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
