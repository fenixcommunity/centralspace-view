import React from "react";
import img from '../../../../resources/beautypage/images/team/office.jpg';

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const TeamHeader = ({ }) => {
  return (
    <div className="section header white">
      <img className="background" src={img} />
      <div className="header-wrapper row valign-wrapper">
        <div className="col s12 m6 offset-m3 valign">
          <h1>Team!</h1>
          <span className="tagline">
          Founded in 2015, we strive to be the best at what we do. This is made possible by our amazing team located around the world.
            </span>
          <button className="read-more">
            <i className="black-text icon-caret-down" />
            {/* <i className="medium red-text material-icons">keyboard_arrow_down</i> */}
          </button>
        </div>
      </div>
    </div>
  );
}

TeamHeader.propTypes = propTypes;

export default TeamHeader;
