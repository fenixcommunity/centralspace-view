import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function PagesDropdown() {
    const dropdownRef = useRef(null);
    useEffect(() => {
        const dropdown = M.Dropdown.init(dropdownRef.current, {});
    }, []);

    return (
        <>
            <li className="active">
                <a
                    className="dropdown-trigger"
                    href='#'
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
                <li>
                    <a href="/"><i className="material-icons">home</i>Main App</a>
                </li>
                <li>
                    <a className="active" href="/beautypage"><i className="material-icons">all_inclusive</i>Beautypage</a>
                </li>
                <li>
                    <a href="/materializecss"><i className="material-icons">grain</i>Materialize Css</a>
                </li>
            </ul>
        </>
    )
}

export default PagesDropdown;
