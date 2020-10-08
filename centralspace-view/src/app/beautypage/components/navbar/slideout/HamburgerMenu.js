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

const HamburgerMenu = ({ }) => {
    return (
        <a
            href="#!"
            data-activates="slide-out"
            data-target="slide-out"
            className="button-collapse right"
        >
            <i className={`material-icons ${props.textStyle}`}>menu</i>
        </a>
    )
}

HamburgerMenu.propTypes = propTypes;

export default HamburgerMenu;
