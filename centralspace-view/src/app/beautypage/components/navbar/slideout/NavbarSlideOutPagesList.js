import React from 'react';
import PagesListForDropdown from "../dropdown/PagesListForDropdown";

function NavbarSlideOutPagesList() {    
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

export default NavbarSlideOutPagesList;
