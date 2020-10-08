import React from "react";
import '../../../../resources/gallery/css/full-search.css';
import Searcher from './searcher/Searcher';
import Logo from "./Logo";
import PagesDropdown from "./PagesDropdown";
import NavbarTooltip from "./NavbarTooltip";
import NotificationIcon from "./NotificationIcon";
import NavbarPagesList from "./NavbarPagesList";
import HamburgerMenu from "./slideout/HamburgerMenu";
import NavbarSlideOut from "./slideout/NavbarSlideOut";

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const Navbar = ({ }) => {
  const darkMode = props.isDarkMode;
  const navbarStyle = darkMode ? 'dark' : '';
  const textStyle = props.isPrimaryColor ? 'primary-color-text' : (darkMode ? 'black-text' : 'white-text')
  const navbarSolidTransitionStyle = props.isNavbarSolidTransition ? 'navbar-solid-transition' : '';

  return (
    <>
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
