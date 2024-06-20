/* eslint-disable react/prop-types */
import React from 'react';
import { LOGO } from '@utils/logoConstants.jsx';
import frontend from '@assets/frontend.webp';
import backend from '@assets/backend.webp';

const Skills = () => {
  const LogoItem = ({ src, alt, text, ariaLabel }) => (
    <div className="flex justify-center items-center flex-col p-2 lg:mx-6">
      <img className="h-10 mb-4 lg:h-12 xl:h-14" src={src} alt={alt} aria-label={ariaLabel} />
      <p className="text-xl md:text-2xl">{text}</p>
    </div>
  );

  return (
    <section className="relative w-full pt-14 overflow-hidden gradient-border-top gradient-border-left md:mt-20">
      <h3 className="relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:-z-10 after:bg-main-light sm:after:h-5 sm:after:-bottom-2">
        Mes compétences
      </h3>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center md:mb-10 mx-auto">
        <img className="h-[300px] w-[300px] object-contain" src={frontend} alt="logo de Frontend" />
        <div className="hidden md:block anim-gradient-bar-horizontal mb-4 mx-10"></div>
        <div className="anim-gradient-bar-vertical mt-4 mb-4 mx-10 md:hidden"></div>
        <img className="h-[300px] w-[300px] object-contain" src={backend} alt="logo de Backend" />
      </div>
      <div className="bg-tertiary pt-0.5 pb-10">
        <h3 className="relative z-0 text-1xl w-fit mx-auto mb-7 mt-10 sm:text-3xl sm:mb-10 md:text-4xl md:mb-12 after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:-z-10 after:bg-main-light sm:after:h-5 sm:after:-bottom-2">
          Outils utilisés
        </h3>
        <div className="grid mx-auto grid-rows-3 justify-items-center items-center md:flex md:justify-center md:items-center">
          <LogoItem src={LOGO.GITHUB} alt="Logo GitHub" text="GitHub" ariaLabel="Logo GitHub" />
          <LogoItem src={LOGO.GIT} alt="Logo Git" text="Git" ariaLabel="Logo Git" />
          <LogoItem src={LOGO.VERCEL} alt="Logo Vercel" text="Vercel" ariaLabel="Logo Vercel" />
          <LogoItem src={LOGO.FIGMA} alt="Logo Figma" text="Figma" ariaLabel="Logo GiFigmatHub" />
          <LogoItem src={LOGO.VITE} alt="Logo Vite" text="Vite" ariaLabel="Logo Vite" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
