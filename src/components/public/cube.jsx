import React from 'react';
import github from '@assets/github-fond-plein.png';
import tailwind from '@assets/tailwindcss-fond-plein.png';
import react from '@assets/react-fond-plein.png';
import nodejs from '@assets/nodejs-fond-plein.png';
import sass from '@assets/sass-fond-plein.png';
import javascript from '@assets/javascript.png';

const Cube = () => {
  return (
    <div className="container mt-20 mb-12 mx-auto md:ml-28 md:mr-[100px]">
      <div className="cube">
        <div className="face top bg-cover bg-no-repeat" style={{ backgroundImage: `url(${github})` }}></div>
        <div className="face bottom  bg-cover bg-no-repeat" style={{ backgroundImage: `url(${tailwind})` }}></div>
        <div className="face right bg-cover bg-no-repeat" style={{ backgroundImage: `url(${react})` }}></div>
        <div className="face left bg-cover bg-no-repeat" style={{ backgroundImage: `url(${nodejs})` }}></div>
        <div className="face front bg-cover bg-no-repeat" style={{ backgroundImage: `url(${sass})` }}></div>
        <div className="face back bg-cover bg-no-repeat" style={{ backgroundImage: `url(${javascript})` }}></div>
      </div>
    </div>
  );
};

export default Cube;
