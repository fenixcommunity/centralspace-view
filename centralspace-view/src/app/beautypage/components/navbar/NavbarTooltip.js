import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  tooltipText: PropTypes.string.isRequired,
  tooltipIconName: PropTypes.string.isRequired
}

const NavbarTooltip = ({ tooltipText, tooltipIconName }) => {
  return (
    <li>
      <a
        href="#!"
        className="tooltipped"
        data-position="bottom"
        data-tooltip={tooltipText}
      >
        <i className={tooltipIconName} />
      </a>
    </li>
  )
}

NavbarTooltip.propTypes = propTypes;

export default NavbarTooltip;
