import React from 'react';
import Card from '@components/public/card';
import Loader from '@components/public/loader';
import { useFetchProjects } from '@utils/projectUtil.jsx';

const Projects = () => {
  const { projects, isLoading, error } = useFetchProjects();
  window.scrollTo(0, 0);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-container main-padding-top main-padding-bottom main-padding-x">
      <div className="w-fit mx-auto md:ml-0">
        <h2>Les projets réalisés</h2>
      </div>
      {error && <div className="h-[30vh] flex items-center justify-center mx-auto">Erreur de récupération de données...</div>}

      {!error && (
        <section className="mt-14 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Projects;
