/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

let useFilePreview = (file) => {
  const fileInput = file[0] ?? [];
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (file && file[0]?.length > 0) {
      const newUrl = URL.createObjectURL(file[0][0]);

      if (newUrl !== imgSrc) {
        setImgSrc(newUrl);
      }
    }
  }, [fileInput[0]?.name]);

  return [imgSrc, setImgSrc];
};

function ProjectForm({ submit, project }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: useMemo(
      () => ({
        title: project?.title,
        subTitle: project?.subTitle,
        description: project?.description,
        problematic: project?.problematic,
        site: project?.site,
        github: project?.github,
        technologies: project?.technologies.map((tech) => tech.type).join(' '),
      }),
      [project],
    ),
  });

  useEffect(() => {
    reset(project);
  }, [project]);

  const file = watch(['file']);
  const [filePreview] = useFilePreview(file);

  return (
    <section className="mx-auto px-3 pb-20 text-center max-w-[800px] md:w-[70%]">
      <form onSubmit={handleSubmit(submit)} className="projectForm w-full">
        <label className="text-left mb-[2px]" htmlFor="title">
          <p>Titre du projet*</p>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Le titre est obligatoire.' })}
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
        </label>
        <label className="text-left mb-[2px]" htmlFor="subTitle">
          <p>Sous titre du projet*</p>
          <input
            type="text"
            id="subTitle"
            {...register('subTitle', { required: 'Le sous titre est obligatoire.' })}
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
        </label>
        <label className="text-left mb-[2px]" htmlFor="description">
          <p>Description*</p>
          <input
            type="text"
            id="description"
            {...register('description', { required: 'La description est obligatoire.' })}
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
        </label>
        <label className="text-left mb-[2px]" htmlFor="problematic">
          <p>Problématique</p>
          <input type="text" id="problematic" {...register('problematic')} className="w-full mb-4 p-1 border rounded-md resize-none text-black" />
        </label>
        <label className="text-left mb-[2px]" htmlFor="site">
          <p>Site</p>
          <input type="text" id="site" {...register('site')} className="w-full mb-4 p-1 border rounded-md resize-none text-black" />
        </label>
        <label className="text-left mb-[2px]" htmlFor="github">
          <p>Github</p>
          <input type="text" id="github" {...register('github')} className="w-full mb-4 p-1 border rounded-md resize-none text-black" />
        </label>
        <label className="text-left mb-[2px]" htmlFor="technologies">
          <p>Skills*</p>
          <input
            type="text"
            id="technologies"
            {...register('technologies', { required: 'Les skils sont obligatoires.' })}
            className="w-full mb-4 p-1 border rounded-md resize-none text-black"
          />
        </label>

        <div className="border">
          <label htmlFor="file" className="text-left mb-[2px]">
            <p className="text-center pt-10 pb-10">Image du projet*</p>
            <div className="h-full w-full object-cover object-center flex justify-center items-center">
              {(filePreview || project?.image) && <img src={filePreview ?? project?.image} alt="preview" />}
            </div>
            <input {...register('file')} type="file" id="file" className="mb-4 p-1 rounded-md resize-none text-black" />
          </label>
        </div>
        <button
          disabled={!isValid}
          className={`py-2 px-4 border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary ${!isValid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          ENVOYER
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
