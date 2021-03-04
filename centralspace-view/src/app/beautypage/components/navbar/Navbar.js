import React from "react";
import PropTypes from 'prop-types';
import '../../../../resources/gallery/css/full-search.css';
import Searcher from './searcher/Searcher';
import Logo from "./Logo";
import PagesDropdown from "./PagesDropdown";
import NavbarTooltip from "./NavbarTooltip";
import NotificationIcon from "./NotificationIcon";
import NavbarPagesList from "./NavbarPagesList";
import HamburgerMenu from "./slideout/HamburgerMenu";
import NavbarSlideOut from "./slideout/NavbarSlideOut";
import LogoutIcon from "./LogoutIcon";

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

  return (
    <>
      <nav className={`navbar ${navbarStyle} ${navbarSolidTransitionStyle}`}>
        <div className="nav-wrapper">
          <Logo textStyle={textStyle} />
          <ul id="mobile-menu" className="right hide-on-med-and-down">
            <Searcher basicSearchIsActive={basicSearchIsActive} fullScreenSearchIsActive={fullScreenSearchIsActive} />
            <PagesDropdown />
            <NavbarPagesList />
            <NavbarTooltip tooltipText="Instagram" tooltipIconName="fab fa-instagram" />
            <NavbarTooltip tooltipText="Facebook" tooltipIconName="fab fa-facebook" />
            <NavbarTooltip tooltipText="Twitter" tooltipIconName="fab fa-twitter" />
            <NotificationIcon notificationIconName="notifications" notificationCount={5} />
            {logoutUser && <LogoutIcon logoutUser={logoutUser}/>}
          </ul>
          {/* HamburgerMenu refers to NavbarSlideOut */}
          <HamburgerMenu textStyle={textStyle} />
        </div>
      </nav>
      <NavbarSlideOut />
    </>
  );
}

Navbar.propTypes = propTypes;

export default Navbar;
