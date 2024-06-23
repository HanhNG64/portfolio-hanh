import React from 'react';
import ABout from '@components/public/about';
import SlideShow from '@components/public/slideShow';
import Skills from '@components/public/skills';
import Loader from '@components/public/loader';
import { useFetchProjectImages } from '@utils/projectUtil.jsx';

const Home = () => {
  const { images, isLoading } = useFetchProjectImages();

  if (isLoading) {
    return <Loader />;
  }

  const getImages = () => {
    const imagesObbject = images.map((image) => ({
      large: image.image_cover_large,
      medium: image.image_cover_medium,
      small: image.image_cover_small,
      default: image.image_cover_small,
    }));
    return imagesObbject;
  };

  return (
    <div className="max-container main-padding-top">
      <ABout />
      <SlideShow pictures={getImages()} />
      <Skills />
    </div>
  );
};

export default Home;
