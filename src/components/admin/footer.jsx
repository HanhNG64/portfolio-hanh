/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '@utils/logoConstants.jsx';

const Footer = () => {
  const SocialLink = ({ url, logo, alt, imgClass }) => (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="h-10 w-10 flex justify-center items-center bg-white rounded-full hover:bg-secondary">
        <img src={logo} alt={alt} className={imgClass} />
      </div>
    </Link>
  );

  return (
    <footer id="contact" className="bg-primary w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col h-full w-[300px] items-center mt-10 mb-10">
          <p className="font-engagement text-9xl text-white">Hanh</p>
          <div className="flex items-center w-full justify-center">
            <div className="flex-grow border-t border-white mr-[10px]"></div>
            <p className="mx-2 text-white font-bold">DEV WEB</p>
            <div className="flex-grow border-t border-white  ml-[10px]"></div>
          </div>
        </div>
        <div className="pb-5 w-full mx-auto">
          <ul className="flex justify-center space-x-3">
            <li>
              <SocialLink url={`${import.meta.env.VITE_GITHUB}`} logo={LOGO.GITHUB} alt="Github" imgClass="h-8 w-8" />
            </li>
            <li>
              <SocialLink url={`${import.meta.env.VITE_LINKEDIN}`} logo={LOGO.LINKEDIN} alt="Linkedin" imgClass="h-6 w-6" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
