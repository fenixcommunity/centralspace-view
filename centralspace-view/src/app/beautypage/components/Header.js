import React from "react";
import img from '../../../resources/beautypage/images/background.jpg';

function Header() {
  return (
    <div className="section header">
      <img className="background" src={img} />
      <div className="header-wrapper row valign-wrapper">
        <div className="col s12">
          <h1>Beauty Page</h1>
          <span className="tagline">
            Take some motion in your life!
            </span>
          <button className="read-more">
            <i className="icon-caret-down" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
