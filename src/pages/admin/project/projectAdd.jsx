import React, { useState } from 'react';
import { projectService, accountService } from '@services';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '@components/admin/projectForm';

const ProjectAdd = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ message: '', success: true });

  let addProject = async (data) => {
    const project = {
      title: data.title,
      subTitle: data.subTitle,
      image: data.image,
      description: data.description,
      problematic: data?.problematic,
      site: data.site,
      github: data.github,
      technologies: data.technologies,
    };

    const bodyFormData = new FormData();
    bodyFormData.append('project', JSON.stringify(project));
    bodyFormData.append('image_cover_large', data.fileCoverLarge[0]);
    bodyFormData.append('image_cover_medium', data.fileCoverSmall[0]);
    bodyFormData.append('image_cover_small', data.fileCoverSmall[0]);
    bodyFormData.append('image_min_large', data.fileMinLarge[0]);
    bodyFormData.append('image_min_medium', data.fileMinSmall[0]);
    bodyFormData.append('image_min_small', data.fileMinSmall[0]);
    return await projectService.addProject(accountService.getToken(), bodyFormData);
  };

  const onSubmit = async (data) => {
    if (!data.fileCoverLarge[0] || !data.fileCoverMedium[0] || !data.fileCoverSmall[0]) {
      alert('Vous devez ajouter toutes les images pour la couverture');
      return;
    }
    if (!data.fileMinLarge[0] || !data.fileMinMedium[0] || !data.fileMinSmall[0]) {
      alert('Vous devez ajouter toutes les images miniatures');
      return;
    }

    try {
      const reponse = await addProject(data);
      if (reponse.ok) {
        navigate('../.');
      } else {
        setInfo({ message: 'Le projet ne peut pas être jouté', success: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="pt-20">
        <h2 className="mb-12 text-center">Ajouter un nouveau projet</h2>
      </div>
      {info.message && (
        <div
          className={`bg-${info.success ? 'green' : 'red'}-100 border ${
            info.success ? 'border-green-400 text-green-700' : 'border-red-400 text-red-700'
          } px-4 py-3 rounded mb-4" role="alert" mb-4 text-center`}
        >
          {info.message}
        </div>
      )}
      <ProjectForm submit={onSubmit} />
    </>
  );
};

export default ProjectAdd;
