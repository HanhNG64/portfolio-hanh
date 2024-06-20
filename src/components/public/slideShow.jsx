import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';

const SlideShow = ({ pictures }) => {
  return (
    <section id="carousel" className="pt-20 w-full p-8">
      <div className="w-fit text-center mb-10 mx-auto">
        <h3 className="relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:-z-10 after:bg-main-light sm:after:h-5 sm:after:-bottom-2">
          Découvrez mes projets
        </h3>
        <p className="mt-10 max-w-3xl">
          Prêt à donner vie à votre site web ? Avec une dose de créativité et une maîtrise technologique, je vais transformer votre vision en réalité.
          Parcourez cette galerie pour découvrir l&apos;univers des possibilités et commencez votre voyage qui vous mettra sous les projecteurs du
          web.
        </p>
      </div>
      <Carousel
        loop={true}
        autoplay={true}
        transition={{ type: 'tween', duration: 0.5 }}
        className="rounded-xl w-full h-[250px] md:h-full"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            onClick={handlePrev}
            className="w-10 h-10 text-white !absolute top-2/4 left-4 -translate-y-2/4 bg-primary rounded-full hover:text-secondary hover:bg-primary"
            aria-label="Slide précédent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            onClick={handleNext}
            className="w-10 h-10 !absolute top-2/4 !right-4 -translate-y-2/4  bg-primary rounded-full hover:text-secondary hover:bg-primary"
            aria-label="Slide suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </IconButton>
        )}
      >
        {pictures.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="h-full w-full object-cover object-center" />
        ))}
      </Carousel>
      <div className="flex flex-col items-end mt-3">
        <NavLink to="/projects" className="flex items-center hover:text-secondary transition-colors">
          Voir mes projets
        </NavLink>
        <div className="anim-bar mr-16"></div>
      </div>
    </section>
  );
};

SlideShow.propTypes = {
  pictures: PropTypes.array,
};

export default SlideShow;
