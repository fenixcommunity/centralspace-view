import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    arrow: PropTypes.objectOf(
        PropTypes.shape({
            ref: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired
}

const PaginationArrow = ({ arrow }) => {
    return (
        <li className={`${arrow.disabled ? "disabled" : ""}`}>
            <a href={arrow.ref}><i className="material-icons">{arrow.icon}</i></a>
        </li>
    )
}

PaginationArrow.propTypes = propTypes;

export default PaginationArrow
