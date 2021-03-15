import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.js';
import PagesListForDropdown from "./dropdown/PagesListForDropdown";

const propTypes = {
    isLogged: PropTypes.bool.isRequired
}

const PagesDropdown = ({ location, isLogged }) => {
    const dropdownRef = useRef(null);
    const isActive = location.pathname === "/beautypage";
    useEffect(() => {
        M.Dropdown.init(dropdownRef.current, {});
    }, []);

    return (
        <>
            <li className={`${isActive ? "active" : ""}`}>
                <a
                    className="dropdown-trigger"
                    href='#!'
                    data-activates="pages"
                    data-target="pages"
                    data-constrainwidth="false"
                    data-beloworigin="true"
                    ref={dropdownRef}
                >
                    Pages<i className="material-icons right">arrow_drop_down</i>
                </a>
            </li>

            <ul id="pages" className="dropdown-content">
                <PagesListForDropdown isLogged={isLogged} />
            </ul>
        </>
    )
}

PagesDropdown.propTypes = propTypes;

export default withRouter(PagesDropdown);
