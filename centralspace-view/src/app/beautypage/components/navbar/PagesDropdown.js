import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import PagesListForDropdown from "./dropdown/PagesListForDropdown";

const propTypes = {}

const PagesDropdown = ({ }) => {
    const dropdownRef = useRef(null);
    useEffect(() => {
        M.Dropdown.init(dropdownRef.current, {});
    }, []);

    return (
        <>
            <li className="active">
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
                <PagesListForDropdown />
            </ul>
        </>
    )
}

PagesDropdown.propTypes = propTypes;

export default PagesDropdown;
