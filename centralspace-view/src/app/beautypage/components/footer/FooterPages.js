import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    sectionName: PropTypes.string.isRequired,
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            ref: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
}

const FooterPages = ({ pages, sectionName }) => {
    const pagesToRender = pages ? (
        pages.map(page => {
            return (
                <li key={page.name}>
                    <a href={page.ref}>{page.name}</a>
                </li>
            )
        })) : ""

    return (
        <div className="col s6 m3">
            <h5>{sectionName}</h5>
            {pagesToRender && (
                <ul>
                    {pagesToRender}
                </ul>
            )}

        </div>
    )
}

FooterPages.propTypes = propTypes;

export default FooterPages;
