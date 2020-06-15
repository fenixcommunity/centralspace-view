import React from "react";

	
function Navbar()  {
    return (
      <nav className="navbar dark">
        <div className="nav-wrapper">
          <a href="horizontal-half.html" className="brand-logo">
            <i className="icon-diamond" />
          </a>
          <ul id="mobile-menu" className="right hide-on-med-and-down">
            <li>
              <a
                className="dropdown-button"
                href="#!"
                data-target="pages"
                data-activates="pages"
                data-constrainwidth="false"
                data-beloworigin="true"
              >
                Pages<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className="active" href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <a href="team.html">Team</a>
            </li>
            <li>
              <a href="docs/about.html">Docs</a>
            </li>
            <li>
              <a href="#">Buy Now!</a>
            </li>
          </ul>
          <ul id="pages" className="dropdown-content">
            <li>
              <a href="horizontal-half.html">Horizontal Halves</a>
            </li>
            <li>
              <a href="sierra.html">Zoom Out</a>
            </li>
            <li>
              <a href="circle-reveal.html">Circle Reveal</a>
            </li>
            <li>
              <a href="phone-wall.html">Phone Wall</a>
            </li>
            <li>
              <a href="element-transitions.html">Element Transitions</a>
            </li>
            <li>
              <a href="basic-elements.html">Basic Elements</a>
            </li>
            <li>
              <a href="card-shuffle.html">Shuffle</a>
            </li>
            <li>
              <a href="postcards.html">Postcards</a>
            </li>
          </ul>
          <a
            href="#"
            data-activates="slide-out"
            data-target="slide-out"
            className="button-collapse right"
          >
            <i className="material-icons black-text">menu</i>
          </a>
        </div>
      </nav>
    );
}

export default Navbar;
