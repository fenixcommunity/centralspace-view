import PropTypes from 'prop-types';
import React from "react";
import '../../../../resources/gallery/css/full-search.css';
import SignedOutNavbar from './SignedOutNavbar';
import SignedInNavbar from './SignedInNavbar';

const propTypes = {
  isDarkMode: PropTypes.bool,
  isPrimaryColor: PropTypes.bool,
  basicSearchIsActive: PropTypes.bool,
  fullScreenSearchIsActive: PropTypes.bool,
  isNavbarSolidTransition: PropTypes.bool,
  logoutUser: PropTypes.func
}

const Navbar = ({
  isDarkMode,
  isPrimaryColor,
  basicSearchIsActive,
  fullScreenSearchIsActive,
  isNavbarSolidTransition,
  logoutUser
}) => {
  const darkMode = isDarkMode;
  const navbarStyle = darkMode ? 'dark' : '';
  const textStyle = isPrimaryColor ? 'primary-color-text' : (darkMode ? 'black-text' : 'white-text')
  const navbarSolidTransitionStyle = isNavbarSolidTransition ? 'navbar-solid-transition' : '';

  const navbarToRender = !logoutUser ? (
    <SignedOutNavbar
      basicSearchIsActive={basicSearchIsActive}
      fullScreenSearchIsActive={fullScreenSearchIsActive}
      navbarStyle={navbarStyle}
      textStyle={textStyle}
      navbarSolidTransitionStyle={navbarSolidTransitionStyle}
    />
  ) : (
    <SignedInNavbar
      logoutUser={logoutUser}
      basicSearchIsActive={basicSearchIsActive}
      fullScreenSearchIsActive={fullScreenSearchIsActive}
      navbarStyle={navbarStyle}
      textStyle={textStyle}
      navbarSolidTransitionStyle={navbarSolidTransitionStyle}
    />
  )

  return (
    // { auth.isLoaded && navbar }
    navbarToRender
  );
}

Navbar.propTypes = propTypes;

export default Navbar;
