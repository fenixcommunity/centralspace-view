import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  tooltipText: PropTypes.string,
  tooltipIconName: PropTypes.string,
  animatedIcon: PropTypes.node
}

const NavbarTooltip = ({ tooltipText, tooltipIconName, animatedIcon }) => {
  return (
    <li>
      <a
        href="#!"
        className="tooltipped"
        data-position="bottom"
        data-tooltip={tooltipText}
      >
        {animatedIcon ? ( animatedIcon ) : (<i className={tooltipIconName} />)}
      </a>
    </li>
  )
}

NavbarTooltip.propTypes = propTypes;

export default NavbarTooltip;
