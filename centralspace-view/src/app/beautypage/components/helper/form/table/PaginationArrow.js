import React from 'react'

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

const PaginationArrow = ({ }) => {
    const arrow = props.arrow;
    return (
        <li className={`${arrow.disabled ? "disabled" : ""}`}>
            <a href={arrow.ref}><i className="material-icons">{arrow.icon}</i></a>
        </li>
    )
}

PaginationArrow.propTypes = propTypes;

export default PaginationArrow
