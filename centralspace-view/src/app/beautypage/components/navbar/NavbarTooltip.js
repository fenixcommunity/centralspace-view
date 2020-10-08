import React from 'react';
import PropTypes from 'prop-types';

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

const NavbarTooltip = ({}) => {
    return (
        <li>
        <a
          href="#!"
          className="tooltipped"
          data-position="bottom"
          data-tooltip={props.tooltipText}
        >
          <i className={props.tooltipIconName} />
        </a>
      </li>
    )
}

NavbarTooltip.propTypes = propTypes;

export default NavbarTooltip;
