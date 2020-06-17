import React from "react";

function Header() {
  return (
    <div className="section header">
      <div className="background">
        <img src="http://placehold.it/1440x900" alt />
      </div>
      <div className="header-wrapper row valign-wrapper">
        <div className="col s12">
          <h1>Element Transitions!</h1>
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
