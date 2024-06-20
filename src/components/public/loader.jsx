/* eslint-disable react/prop-types */
import React from 'react';

const Loader = () => {
  return (
    <div className="mx-auto my-40 w-[20vh] h-[20vh] rounded-lg flex justify-center items-center">
      <div className="relative w-72 h-72 rounded-full border-8 border-transparent border-t-primary animate-spinSlow">
        <div className="absolute top-4 left-4 right-4 bottom-8 rounded-full border-8 border-transparent border-t-secondary animate-spinMedium" />
        <div className="loader-after absolute top-10 left-10 right-10 bottom-10 rounded-full border-8 border-transparent border-t-orange-500 animate-spinFast" />
      </div>
    </div>
  );
};

export default Loader;
