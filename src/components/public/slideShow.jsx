import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '@material-tailwind/react';
import { Link as LinkRooter } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import customCarousselTheme from '@components/public/customCarousselTheme';

const SlideShow = ({ pictures }) => {
  return (
    <ThemeProvider value={customCarousselTheme}>
      <section id="carousel" className="pt-20 w-full p-8">
        <div className="w-fit text-center mb-10 mx-auto">
          <h2 className="relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12 after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:-z-10 after:bg-main-light sm:after:h-5 sm:after:-bottom-2">
            Découvrez mes projets
          </h2>
          <p className="mt-10 max-w-3xl">
            Prêt à donner vie à votre site web ? Avec une dose de créativité et une maîtrise technologique, je vais transformer votre vision en
            réalité. Parcourez cette galerie pour découvrir l&apos;univers des possibilités et commencez votre voyage qui vous mettra sous les
            projecteurs du web.
          </p>
        </div>
        <Carousel loop={true} autoplay={true} transition={{ type: 'tween', duration: 0.5 }} aria-label="Previous slide" className="rounded-xl">
          {pictures.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="h-[500px] w-full object-cover object-center" />
          ))}
        </Carousel>
        <div className="flex flex-col items-end mt-3">
          <LinkRooter to="/projects">Voir mes projets</LinkRooter>
          <div className="anim-bar mr-16"></div>
        </div>
      </section>
    </ThemeProvider>
  );
};

SlideShow.propTypes = {
  pictures: PropTypes.array,
};

export default SlideShow;
