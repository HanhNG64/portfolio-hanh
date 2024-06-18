import React from 'react';
import Logo from '@assets/portrait.webp';
import Cube from '@components/public/cube';
import CV from '@assets/cv_hanh.pdf';

const ABout = () => {
  return (
    <section id="about" className="px-8 w-full">
      <div className="w-fit mx-auto md:ml-0">
        <h1 className="">DEVELOPPEUSE WEB</h1>
      </div>
      <div className="relative max-w-screen-md mt-14 overflow-hidden gradient-border-top gradient-border-left bg-primary shadow-about pb-5">
        <div className="flex flex-col items-start justify-between md:flex-row md:justify-center md:items-center">
          <Cube />
          <div className="mt-10 ml-10 pb-10 md:flex-1 md:mt-14">
            <h2 className="text-white text-center mr-10 md:text-start md:text-nowrap">Bienvenue sur mon portfolio !</h2>
            <p className="text-justify mt-5 mr-10 text-white ">
              Je suis Hanh Nguyen, une développeuse web full stack, animée par la passion de créer et d&apos;apprendre. Explorez mes projets et suivez
              mon évolution dans le monde du développement web.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col max-w-screen-md ml-auto mt-14 overflow-hidden shadow-about gradient-border-top-primary gradient-border-left-primary md:pl-5 md:flex-row md:justify-center md:items-center">
        <img src={Logo} alt="logo Hanh dev web" className="mx-auto w-64 h-64 mt-5 object-cover rounded-full md:mt-0" />
        <div className="flex flex-col justify-between items-start mt-10 ml-10 mr-10 mb-10">
          <div className="anim-bar mb-4"></div>
          <h2 className="font-engagement text-4xl mb-5">Hanh Nguyen</h2>
          <p className="text-justify">
            Après des années en développement Java, j&apos;ai découvert un engouement pour le développement web. Fascinée par la créativité, j&apos;ai
            suivi une formation pour enrichir mes compétences en Frontend et Backend. Actuellement, je cherche un poste de développeuse web full stack
            dans une entreprise dynamique. Mon objectif est de mettre en pratique mes compétences tout en continuant à évoluer. Explorez mon CV pour
            découvrir mon parcours, et ensemble, créons des projets innovants et passionnants.
          </p>
          <div className="flex flex-col items-end mt-3 ml-auto">
            <a href={CV} target="_blank" rel="noopener noreferrer" className="flex flex-col items-end mt-3 hover:text-secondary">
              Voir mon CV
            </a>
            <div className="anim-bar mr-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABout;
