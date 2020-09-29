import React from 'react'
import PaginationArrow from './PaginationArrow'
import PaginationItem from './PaginationItem'

function Pagination(props) {
    const arrows = props.arrows
    const pages = props.pages
    return (
        <ul className="pagination">
            <PaginationArrow arrow={arrows.left} />
            {pages && pages.map(page =>
                <PaginationItem page={page} />
            )}
            <PaginationArrow arrow={arrows.right} />
        </ul>
    )
}

export default Pagination
