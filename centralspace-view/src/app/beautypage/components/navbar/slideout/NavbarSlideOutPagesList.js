import React from 'react';
import PropTypes from 'prop-types';
import PagesListForDropdown from "../dropdown/PagesListForDropdown";

const propTypes = {
    isLogged: PropTypes.bool.isRequired
}

const NavbarSlideOutPagesList = ({ isLogged }) => {
    const preventDefault = (event) => event.preventDefault();
    return (
        <li className="bold">
            <a className="collapsible-header waves-effect waves-teal" href="#!"
                onClick={preventDefault}>
                Pages
              </a>
            <div className="collapsible-body">
                <ul>
                    <PagesListForDropdown isLogged={isLogged} />
                </ul>
            </div>
        </li>
    )
}

NavbarSlideOutPagesList.propTypes = propTypes;

export default NavbarSlideOutPagesList;
