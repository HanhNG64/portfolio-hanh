import React from 'react';
import github from '@assets/github-fond-plein.png';
import tailwind from '@assets/tailwindcss-fond-plein.png';
import react from '@assets/react-fond-plein.png';
import nodejs from '@assets/nodejs-fond-plein.png';
import sass from '@assets/sass-fond-plein.png';
import javascript from '@assets/javascript.png';

const Cube = () => {
  const CUBE_SIZE = '140px';

  return (
    <div className="cube-perspective mt-20 mb-16 mx-auto md:ml-28" style={{ width: CUBE_SIZE, height: CUBE_SIZE }}>
      <div className="w-full h-full relative transform-style-preserve-3d animate-cube-spin">
        <div className="absolute top bg-cover bg-no-repeat" style={{ width: CUBE_SIZE, height: CUBE_SIZE, backgroundImage: `url(${github})` }}></div>
        <div
          className="absolute bottom bg-cover bg-no-repeat"
          style={{ width: CUBE_SIZE, height: CUBE_SIZE, backgroundImage: `url(${tailwind})` }}
        ></div>
        <div className="absolute right bg-cover bg-no-repeat" style={{ width: CUBE_SIZE, height: CUBE_SIZE, backgroundImage: `url(${react})` }}></div>
        <div className="absolute left bg-cover bg-no-repeat" style={{ width: CUBE_SIZE, height: CUBE_SIZE, backgroundImage: `url(${nodejs})` }}></div>
        <div className="absolute front bg-cover bg-no-repeat" style={{ width: CUBE_SIZE, height: CUBE_SIZE, backgroundImage: `url(${sass})` }}></div>
        <div
          className="absolute back bg-cover bg-no-repeat"
          style={{ width: CUBE_SIZE, height: CUBE_SIZE, backgroundImage: `url(${javascript})` }}
        ></div>
      </div>
    </div>
  );
};

export default Cube;
