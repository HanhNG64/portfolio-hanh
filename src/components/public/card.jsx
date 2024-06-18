/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projectService } from '@services';
import { LOGO } from '@utils/logoConstants.jsx';
import { Button } from '@material-tailwind/react';
import Loader from '@components/public/loader';

const Card = ({ project }) => {
  const [like, setLike] = useState(0);
  const [isLoad, setLoad] = useState(false);
  const flag = useRef(false);

  const projectLikes = project.like;

  useEffect(() => {
    if (flag.current === false) {
      setLike(projectLikes);
      setLoad(true);
    }
  }, [projectLikes]);

  let onLike = async () => {
    try {
      const like = await projectService.likeProject({ like: 'true' }, project._id);
      setLike(like);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const LinkImg = ({ to, src, alt, className, ariaLabel }) => {
    return (
      <Link to={to} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className={className} aria-label={ariaLabel} />
      </Link>
    );
  };

  if (!isLoad) {
    return <Loader />;
  }

  return (
    <article className="relative overflow-hidden rounded-2xl placeholder:cursor-pointer border border-gray-300 hover:border-primary transition-transform duration-400 ease-out group">
      <LinkImg
        to={`/projects/${project._id}`}
        src={project.image}
        alt="Image du projet"
        className="h-96 w-full max-w-full object-cover object-center"
        ariaLabel="Image du projet"
      />
      <Button
        variant="text"
        color="red"
        size="sm"
        onClick={onLike}
        className="!absolute top-0 right-0 rounded-full flex items-center justify-center p-1.5 mt-2 mr-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <span className="ml-1.5">{like}</span>
      </Button>

      <ul className="side-social absolute top-0 h-full list-none transform translate-x-0 opacity-0 group-hover:translate-x-10 group-hover:opacity-100 transition-transform duration-200 ease-in-out">
        {project.github && (
          <li
            className={`w-9 h-9 rounded-full m-1 border border-primary flex justify-center items-center transform -translate-x-full transition-transform duration-200 ease-in-out ${!project.github ? '' : 'hover:bg-secondary '}`}
          >
            <LinkImg to={`${project.github}`} src={LOGO.GITHUB} alt="Logo Github" className="w-10 object-cover" ariaLabel="Logo Github" />
          </li>
        )}
        {project.site && (
          <li
            className={`w-9 h-9 rounded-full m-1 border border-primary bg-[#0d1137cc] flex justify-center items-center transform -translate-x-full transition-transform duration-200 ease-in-out ${!project.site ? '' : 'hover:bg-secondary '}`}
          >
            <LinkImg to={`${project.site}`} src={LOGO.DRIBLLE} alt="Logo Dribble" className="w-8" aria-label="Logo Dribble" />
          </li>
        )}
      </ul>
      <div className="profile-info absolute bottom-0 w-full p-2 bg-primary border-t-2 text-center transform translate-y-full transition duration-300 ease-in-out group-hover:translate-y-0">
        <p className="text-lg font-semibold mb-1 text-white">{project.title}</p>
        <p className="text-lg font-semibold mb-1 text-white">{project.subTitle}</p>
      </div>
    </article>
  );
};

export default Card;
