import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    textStyle: PropTypes.string
}

const HamburgerMenu = ({ textStyle }) => {
    return (
        <a
            href="#!"
            data-activates="slide-out"
            data-target="slide-out"
            className="button-collapse right"
        >
            <i className={`material-icons ${textStyle}`}>menu</i>
        </a>
    )
}

HamburgerMenu.propTypes = propTypes;

export default HamburgerMenu;
