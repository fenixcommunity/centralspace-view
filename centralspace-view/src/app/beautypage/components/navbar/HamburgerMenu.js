import React from 'react';

function HamburgerMenu(props) {
    return (
            <a
                href="#"
                data-activates="slide-out"
                data-target="slide-out"
                className="button-collapse right"
            >
                <i className={`material-icons ${props.textStyle}`}>menu</i>
            </a>
    )
}

export default HamburgerMenu;
