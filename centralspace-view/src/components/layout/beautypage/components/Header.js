import React from "react";
import img from '../../../../resources/beautypage/images/1440x90.png';
import M from 'materialize-css/dist/js/materialize.js';


class Header extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {

    return (
      <div className="section header">
        <img className="background" src="http://placehold.it/1440x900"/>
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
