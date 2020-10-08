import React from 'react';
import PropTypes from 'prop-types';
import PagesListForDropdown from "../dropdown/PagesListForDropdown";

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

const NavbarSlideOutPagesList = ({ }) => {    
    return (
        <li className="bold">
            <a className="collapsible-header waves-effect waves-teal active" href="#!">
                Pages
              </a>
            <div className="collapsible-body">
                <ul>
             <PagesListForDropdown />
                </ul>
            </div>
        </li>
    )
}

NavbarSlideOutPagesList.propTypes = propTypes;

export default NavbarSlideOutPagesList;
