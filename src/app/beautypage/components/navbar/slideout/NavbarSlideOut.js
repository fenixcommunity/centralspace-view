import React from "react";
import PropTypes from 'prop-types';
import '../../../../../resources/beautypage/css/sidenav-helper.css'; // remove sidenav styles from startup css file
import Divider from "../../helper/Divider";
import NavbarSlideOutHeader from "./NavbarSlideOutHeader";
import NavbarSlideOutPagesList from "./NavbarSlideOutPagesList";
import NavbarSlideOutFooter from "./NavbarSlideOutFooter";

const propTypes = {
  isLogged: PropTypes.bool.isRequired
}

const NavbarSlideOut = ({ isLogged }) => {
  return (
    <ul id="slide-out" className="side-nav sidenav-helper">
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          {isLogged && <NavbarSlideOutHeader />}
          <li><Divider /></li>
          <NavbarSlideOutPagesList isLogged={isLogged} waves={false} />
        </ul>
      </li>
      <li><Divider /></li>
      <NavbarSlideOutFooter isLogged={isLogged} waves={true} />
    </ul>

  );
}

NavbarSlideOut.propTypes = propTypes;

export default NavbarSlideOut;