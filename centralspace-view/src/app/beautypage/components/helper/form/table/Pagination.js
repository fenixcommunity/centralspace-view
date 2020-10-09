import React from 'react';
import PropTypes from 'prop-types';
import PaginationArrow from './PaginationArrow'
import PaginationItem from './PaginationItem'
const propTypes = {
    pages: PropTypes.array.isRequired,
    arrows: PropTypes.object.isRequired
}

const Pagination = ({ pages, arrows }) => {
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
