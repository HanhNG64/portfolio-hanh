import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Navbar, Collapse, Typography, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function NavList() {
    return (
      <ul className="uppercase text-sm flex flex-col justify-end items-center pb-1 text-white md:text-nowrap md:text-lg md:flex-row md:space-x-5">
        <Typography as="li" variant="small" className="p-1 font-medium">
          <NavLink to="/home" className="flex items-center hover:text-secondary transition-colors text-lg">
            Accueil
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-medium">
          <NavLink to="/home#about" className="flex items-center hover:text-secondary transition-colors text-lg">
            A propos
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-medium">
          <NavLink to="/projects" className="flex items-center hover:text-secondary transition-colors text-lg">
            Projets
          </NavLink>
        </Typography>
        {/* For SEO */}
        <Typography
          as="li"
          onClick={scrollToBottom}
          variant="small"
          color="blue-gray"
          className="p-1 font-medium flex items-center hover:text-secondary transition-colors text-lg cursor-pointer"
        >
          Contact
        </Typography>
      </ul>
    );
  }
  return (
    <header className="max-w-full bg-[#0d1137]">
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 rounded-none border-none bg-[#0d1137] bg-opacity-100">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex flex-col h-full w-[150px] items-center">
            <p className="font-engagement text-6xl">Hanh</p>
            <div className="flex items-center w-full justify-center">
              <div className="flex-grow border-t border-white"></div>
              <p className="mx-2 text-white font-bold">DEV WEB</p>
              <div className="flex-grow border-t border-white"></div>
            </div>
          </div>
          <div className="hidden md:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>

      {isScrolled && (
        <div
          className="z-20 w-10 h-10 ml-2 fixed bottom-0 right-2 mb-4 mr-4 animate-bounce bg-primary shadow-yellow rounded-full flex items-center justify-center cursor-pointer"
          onClick={scrollToTop}
        >
          <svg
            className="w-6 h-6 text-white sm:w-8 hover:text-secondary"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7 7 7M12 3v18"></path>
          </svg>
        </div>
      )}
    </header>
  );
};

export default Header;
