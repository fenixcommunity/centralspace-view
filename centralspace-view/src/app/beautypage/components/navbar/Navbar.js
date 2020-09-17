import React from "react";
import '../../../../resources/gallery/css/full-search.css';
import Searcher from './Searcher';
import Logo from "./Logo";
import PagesDropdown from "./PagesDropdown";
import NavbarTooltip from "./NavbarTooltip";
import NotificationIcon from "./NotificationIcon";
import NavbarPagesList from "./NavbarPagesList";
import HamburgerMenu from "./HamburgerMenu";

function Navbar(props) {
  const darkMode = props.isDarkMode;
  const navbarStyle = darkMode ? 'dark' : '';
  const textStyle = props.isPrimaryColor ? 'primary-color-text' : (darkMode ? 'black-text' : 'white-text')
  const navbarSolidTransitionStyle = props.isNavbarSolidTransition ? 'navbar-solid-transition' : '';

  return (
    <nav className={`navbar ${navbarStyle} ${navbarSolidTransitionStyle}`}>
      <div className="nav-wrapper">
        <Logo textStyle={textStyle} />
        <ul id="mobile-menu" className="right hide-on-med-and-down">
          <Searcher basicSearchIsActive={props.basicSearchIsActive} fullScreenSearchIsActive={props.fullScreenSearchIsActive} />
          <PagesDropdown />
          <NavbarPagesList />
          <NavbarTooltip tooltipText="Instagram" tooltipIconName="fab fa-instagram" />
          <NavbarTooltip tooltipText="Facebook" tooltipIconName="fab fa-facebook" />
          <NavbarTooltip tooltipText="Twitter" tooltipIconName="fab fa-twitter" />
          <NotificationIcon notificationIconName="notifications" notificationCount={5} />
        </ul>
        <HamburgerMenu textStyle={textStyle} />
      </div>
    </nav>
  );
}

export default Navbar;
