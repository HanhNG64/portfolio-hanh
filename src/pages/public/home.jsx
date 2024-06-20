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
    return images.map((image) => image.image_cover);
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
