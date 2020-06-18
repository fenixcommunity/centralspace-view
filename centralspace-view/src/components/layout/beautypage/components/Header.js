import React from "react";
import img from '../../../../resources/beautypage/images/background.jpg';

function Header() {
  return (
    <div className="section header">
      <img className="background" src={img} />
      <div className="header-wrapper row valign-wrapper">
        <div className="col s12">
          <h1>Basic Elements!</h1>
          <span className="tagline">
            Show off your business in a whole new way.
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
