import React from "react";
import '../../../../../resources/beautypage/css/sidenav-helper.css'; // remove sidenav styles from startup css file
import Divider from "../../helper/Divider";
import NavbarSlideOutHeader from "./NavbarSlideOutHeader";
import NavbarSlideOutPagesList from "./NavbarSlideOutPagesList";
import NavbarSlideOutFooter from "./NavbarSlideOutFooter";

function NavbarSlideOut() {
  return (
    <ul id="slide-out" className="side-nav sidenav-helper">
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <NavbarSlideOutHeader />
          <li><Divider /></li>
          <NavbarSlideOutPagesList waves={false} />
        </ul>
      </li>
      <li><Divider /></li>
      <NavbarSlideOutFooter waves={true} />
    </ul>

  );
}

export default NavbarSlideOut;