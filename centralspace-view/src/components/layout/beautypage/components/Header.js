import React from "react";
import img from '../../../../resources/beautypage/images/1440x90.png';
import img2 from '../../../../resources/beautypage/images/trees.jpg';
import M from 'materialize-css/dist/js/materialize.js';

class Header extends React.Component {
  render() {
    return (
      <div className="section header">
        <img className="background" src={img2}/>
        {/* <img className="background" src={img} alt="picture" /> */}
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
}

export default Header;
