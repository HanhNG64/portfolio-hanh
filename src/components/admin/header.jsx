import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@services';
import { Link as NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Navbar, Collapse, Typography, Button, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Bars4Icon, RectangleGroupIcon, SquaresPlusIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const Header = () => {
  let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate('/');
  };

  const login = async () => {
    const reponse = await accountService.login();
    if (reponse.ok) {
      navigate('/');
    }
  };

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

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const navListMenuItems = [
    {
      title: 'Afficher les projets',
      icon: Bars4Icon,
      url: './project',
    },
    {
      title: 'Ajouter un nouveau projet',
      icon: SquaresPlusIcon,
      url: './project/add',
    },
    {
      title: 'Afficher les utilisateurs',
      icon: UserGroupIcon,
      url: './user',
    },
    {
      title: 'Ajouter un utilisateur',
      icon: RectangleGroupIcon,
      url: './user/add',
    },
  ];

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const renderItems = navListMenuItems.map(({ icon, title, url }, key) => (
      <NavLink to={url} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg text-white">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-0 ">
            {React.createElement(icon, {
              strokeWidth: 20,
              className: 'h-6 w-6 text-primary  flex items-center justify-center',
            })}
          </div>
          <div>
            <Typography variant="h6" className="flex items-center text-sm font-bold">
              {title}
            </Typography>
          </div>
        </MenuItem>
      </NavLink>
    ));

    return (
      <React.Fragment>
        <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Actions
                <ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`} />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-fit h-25 rounded-xl lg:block">
            <ul className="grid grid-cols-4 gap-y-2 outline-none outline-0">{renderItems}</ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
    );
  }

  function NavList() {
    return (
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
        <Typography as="a" href="/home" variant="small" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4">Accueil</ListItem>
        </Typography>
        <NavListMenu />
      </List>
    );
  }

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <header className="max-w-full bg-[#0d1137]">
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 rounded-none border-none bg-[#0d1137] bg-opacity-100">
        <div className="flex items-center justify-between text-white">
          <div className="flex flex-col h-full w-[150px] items-center">
            <p className="font-engagement text-6xl">Hanh</p>
            <div className="flex items-center w-full justify-center">
              <div className="flex-grow border-t border-white"></div>
              <p className="mx-2 text-white font-bold">DEV WEB</p>
              <div className="flex-grow border-t border-white"></div>
            </div>
          </div>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Button variant="text" size="sm" color="blue-gray" onClick={login}>
              Connexion
            </Button>
            <Button variant="gradient" size="sm" onClick={logout}>
              Déconnexion
            </Button>
          </div>
          <IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth onClick={login}>
              Connexion
            </Button>
            <Button variant="gradient" size="sm" fullWidth onClick={logout}>
              Déconnexion
            </Button>
          </div>
        </Collapse>
      </Navbar>

      {isScrolled && (
        <div
          className="w-10 h-10 ml-2 fixed bottom-0 right-2 mb-4 mr-4 animate-bounce bg-primary shadow-yellow rounded-full flex items-center justify-center"
          onClick={scrollToTop}
        >
          <svg
            className="w-6 h-6 text-white sm:w-8 "
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
