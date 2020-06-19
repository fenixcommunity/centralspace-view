import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function Navbar(props) {
  const dropdownRef = useRef(null);
  useEffect(() => {
    let dropdown = M.Dropdown.init(dropdownRef.current, {});
    // M.AutoInit();
  }, []);

  const darkMode = props.isDarkMode;
  const navbarStyle = darkMode ? 'dark' : '';
  const textStyle = props.isPrimaryColor ? 'primary-color-text' : (darkMode ? 'black-text' : 'white-text')
  const navbarSolidTransitionStyle = props.isNavbarSolidTransition ? 'navbar-solid-transition' : '';

  return (
    <nav className={`navbar ${navbarStyle} ${navbarSolidTransitionStyle}`}>
      <div className="nav-wrapper">
        <a href="/beautypage" className="brand-logo">
          <i className={`icon-diamond ${textStyle}`} />
        </a>
        <ul id="mobile-menu" className="right hide-on-med-and-down">
          <li className="active">
            <a
              className="dropdown-trigger"
              href='#'
              data-activates="pages"
              data-target="pages"
              data-constrainwidth="false"
              data-beloworigin="true"
              ref={dropdownRef}
            >
              Pages<i className="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <li>
            <a href="/beautyblog">Blog</a>
          </li>
          <li>
            <a href="/beautyteam">Team</a>
          </li>
          <li>
            <a href="/beautytransitions">Transitions</a>
          </li>
          <li>
            <a href="/beautywall">Phone Wall</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped"
              data-position="bottom"
              data-tooltip="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped"
              data-position="bottom"
              data-tooltip="Facebook"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped"
              data-position="bottom"
              data-tooltip="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>

          </li>

          <li className="top-media-icon">
            <button
              href="#"
              className="tooltipped btn-floating btn-small"
              data-position="bottom"
              data-tooltip="Instagram"
            >
              <i className="fab fa-instagram" />
            </button>
          </li>
          <li className="top-media-icon">
            <button
              href="#"
              className="tooltipped btn-floating btn-small"
              data-position="bottom"
              data-tooltip="Facebook"
            >
              <i className="fab fa-facebook" />
            </button>
          </li>
          <li className="top-media-icon">
            <button
              href="#"
              className="tooltipped btn-floating btn-small"
              data-position="bottom"
              data-tooltip="Twitter"
            >
              <i className="fab fa-twitter" />
            </button>
          </li>

        </ul>
        <ul id="pages" className="dropdown-content">
          <li>
            <a href="/">Main App</a>
          </li>
          <li>
            <a className="active" href="/beautypage">Beautypage</a>
          </li>
          <li>
            <a href="/materializecss">Materialize Css</a>
          </li>
        </ul>
        <a
          href="#"
          data-activates="slide-out"
          data-target="slide-out"
          className="button-collapse right"
        >
          <i className={`material-icons ${textStyle}`}>menu</i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
