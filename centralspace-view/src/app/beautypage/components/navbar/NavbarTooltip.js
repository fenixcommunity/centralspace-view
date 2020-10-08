import React from 'react';

function NavbarTooltip(props) {
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

export default NavbarTooltip;
