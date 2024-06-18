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
    <div className={`w-[${CUBE_SIZE}] h-[${CUBE_SIZE}] cube-perspective mt-20 mb-16 mx-auto md:ml-28 md:mr-[100px]`}>
      <div className="w-full h-full relative transform-style-preserve-3d animate-cube-spin">
        <div className={`absolute w-[${CUBE_SIZE}] h-[${CUBE_SIZE}] top bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${github})` }}></div>
        <div
          className={`absolute w-[${CUBE_SIZE}] h-[${CUBE_SIZE}] bottom bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${tailwind})` }}
        ></div>
        <div className={`absolute w-[${CUBE_SIZE}] h-[${CUBE_SIZE}] right bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${react})` }}></div>
        <div className={`absolute w-[${CUBE_SIZE}] h-[${CUBE_SIZE}] left bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${nodejs})` }}></div>
        <div className={`absolute w-[${CUBE_SIZE}] h-[${CUBE_SIZE}] front bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${sass})` }}></div>
        <div
          className={`absolute w-[${CUBE_SIZE}] h-[${CUBE_SIZE}] back bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${javascript})` }}
        ></div>
      </div>
    </div>
  );
};

export default Cube;
