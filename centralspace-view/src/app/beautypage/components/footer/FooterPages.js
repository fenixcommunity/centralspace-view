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

const FooterPages = ({ }) => {
    const pages = props.pages ? (
        props.pages.map(page => {
            return (
                <li key={page.name}>
                    <a href={page.ref}>{page.name}</a>
                </li>
            )
        })) : ""

    return (
        <div className="col s6 m3">
            <h5>{props.sectionName}</h5>
            {pages && (
            <ul>
                {pages}
            </ul>
            )}

        </div>
    )
}

FooterPages.propTypes = propTypes;

export default FooterPages;
