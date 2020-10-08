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

const Icon = ({ }) => {
    return (
        <i className={`material-icons ${props.iconColor ? props.iconColor : ""} ${props.possition ? props.possition : "right"}`}>
            {props.icon}
        </i>
    )
}

Icon.propTypes = propTypes;

export default Icon;
