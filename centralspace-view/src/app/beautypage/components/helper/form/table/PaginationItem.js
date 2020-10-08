import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    page: PropTypes.objectOf(
        PropTypes.shape({
            ref: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            active: PropTypes.bool,
            waves: PropTypes.bool
        })
    ).isRequired
}

const PaginationItem = ({ page }) => {
    const activeClass = page.active ? "active" : "";
    const wavesClass = page.waves ? "waves-effect" : "";
    return (
        <li className={`${activeClass} ${wavesClass}`}>
            <a href={page.ref}>{page.number}</a>
        </li>
    )
}

PaginationItem.propTypes = propTypes;

export default PaginationItem
