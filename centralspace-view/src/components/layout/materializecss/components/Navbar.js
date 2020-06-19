import React from "react";

function Navbar() {
 
  return (
    <header>
      <nav className="nav-wrapper transparent">
        <div className="container">
          <a href="#" className="brand-logo">
            Centralspace App
            </a>
          <a href="#" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
          <li>
              <a href="/beautypage">Beauty Page</a>
            </li>
            <li>
              <a href="/materializecss/training/index.html">Training</a>
            </li>
            <li>
              <a href="#photos">Photo's</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="#"
                className="tooltipped btn-floating btn-small indigo darken-4"
                data-position="bottom"
                data-tooltip="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="tooltipped btn-floating btn-small indigo darken-4"
                data-position="bottom"
                data-tooltip="Facebook"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="tooltipped btn-floating btn-small indigo darken-4"
                data-position="bottom"
                data-tooltip="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
          </ul>
          <ul className="sidenav grey lighten-2" id="mobile-menu">
            <li>
              <a href="#">Photo's</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
