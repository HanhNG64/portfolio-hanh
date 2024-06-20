/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { LOGO } from '@utils/logoConstants';
import { useParams } from 'react-router';
import { projectService } from '@services';
import { Card, CardHeader, CardBody, Typography, Button, Tooltip } from '@material-tailwind/react';
import { useFetchOneProject } from '@utils/projectUtil.jsx';
import Loader from '@components/public/loader';

const ProjectDetail = () => {
  let { id } = useParams();
  const [like, setLike] = useState(0);
  const { project, isLoading, error } = useFetchOneProject(id);
  const [info, setInfo] = useState({ message: '', success: true });

  useEffect(() => {
    if (!isLoading && project) {
      setLike(project.like);
    }
  }, [isLoading, project]);

  let onLike = async () => {
    try {
      const like = await projectService.likeProject({ like: 'true' }, project._id);
      setLike(like);
    } catch (error) {
      setInfo({ message: "Une erreur s'est produite lors de l'ajout du like. Veuillez réessayer plus tard.", success: false });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  window.scrollTo(0, 0);

  return (
    <div className="max-container main-padding-top main-padding-bottom main-padding-x">
      <div className="w-fit mx-auto md:ml-0">
        <h2>Détail du projet</h2>
      </div>
      {error && <div className="h-[30vh] flex items-center justify-center mx-auto">Erreur de récupération de données...</div>}

      {info.message && (
        <div
          className={`bg-${info.success ? 'green' : 'red'}-100 border ${
            info.success ? 'border-green-400 text-green-700' : 'border-red-400 text-red-700'
          } px-4 mt-14 rounded mb-4" role="alert" mb-4`}
        >
          {info.message}
        </div>
      )}

      {!error && (
        <Card className="mt-14 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img src={project.image_cover} alt="Photo du projet" className="w-full h-64 object-cover md:h-96" aria-label="Image du projet" />
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              {project.title && (
                <Typography variant="paragraph" className="font-bold text-2xl">
                  {project?.title}
                </Typography>
              )}
              <Button variant="text" color="red" onClick={onLike} className="flex items-center justify-center hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <span className="ml-1.5 text-black"> {like}</span>
              </Button>
            </div>

            <div className="mb-3">
              <Typography variant="paragraph" className="font-bold">
                Description
              </Typography>
              {project.description && <Typography>{project.description}</Typography>}
            </div>

            <div className="mb-3">
              <Typography variant="paragraph" className="font-bold">
                Problématique
              </Typography>
              {project.problematic && <Typography>{project.problematic}</Typography>}
            </div>

            <div className="flex flex-col justify-between items-center mt-5 md:flex-row">
              <div className="group inline-flex flex-wrap items-center gap-3">
                {project.technologies &&
                  project.technologies[0].split(' ').map((skill, index) => (
                    <Tooltip key={index} content={skill}>
                      <span className="w-9 h-9 rounded-lg m-1 border border-primary flex justify-center items-center">
                        <img src={LOGO[skill.toUpperCase()] || LOGO.UNKNOWN} alt={skill} aria-label="Logo du skill" />
                      </span>
                    </Tooltip>
                  ))}
              </div>
              <div className="flex flex-col justify-between items-center gap-2 mt-5 md:flex-row md:mt-0">
                {project.site && (
                  <a href={project.site}>
                    <Button disabled={!project.site} className="flex items-center gap-2 hover:text-secondary w-40">
                      Voir le site
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a href={project.github}>
                    <Button disabled={!project.github} className="flex items-center gap-2 hover:text-secondary w-40">
                      Voir le code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ProjectDetail;
