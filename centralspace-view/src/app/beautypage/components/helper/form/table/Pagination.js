import React from 'react'
import PaginationArrow from './PaginationArrow'
import PaginationItem from './PaginationItem'

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

const Pagination = ({ }) => {
    const arrows = props.arrows
    const pages = props.pages
    return (
        <ul className="pagination">
            <PaginationArrow arrow={arrows.left} />
            {pages && pages.map(page =>
                <PaginationItem key={page.number} page={page} />
            )}
            <PaginationArrow arrow={arrows.right} />
        </ul>
    )
}

Pagination.propTypes = propTypes;

export default Pagination
