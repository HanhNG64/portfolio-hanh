import React from 'react';
import ABout from '@components/public/about';
import SlideShow from '@components/public/slideShow';
import Skills from '@components/public/skills';
import Loader from '@components/public/loader';
import { useFetchProjectImages } from '@utils/projectUtil.jsx';

const Home = () => {
  const { projects, isLoading } = useFetchProjectImages();

  if (isLoading) {
    return <Loader />;
  }

  const images = () => {
    return projects.map((project) => project.image);
  };

  return (
    <div className="max-container main-padding-top">
      <ABout />
      <SlideShow pictures={images()} />
      <Skills />
    </div>
  );
};

export default Home;
