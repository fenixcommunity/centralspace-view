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

const PaginationItem = ({ }) => {
    const page = props.page;
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
