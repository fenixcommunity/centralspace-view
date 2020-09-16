import React from "react";

function Footer() {
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>About Me</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum at lacus congue.
              </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
              </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#">
                  Facebook
                  </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#">
                  Twitter
                  </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#">
                  Linked In
                  </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#">
                  Instagram
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container center-align">© 2018 Centralspace App</div>
      </div>
    </footer>
  );
}

export default Footer;
