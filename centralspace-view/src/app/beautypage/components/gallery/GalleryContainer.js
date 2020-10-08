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

const GalleryContainer = ({ }) => {
    return (
        <div id="portfolio">
            <div className="container">
                <div className="gallery row">
                    {props.items}
                </div>
            </div>
        </div>
    )
}

GalleryContainer.propTypes = propTypes;

export default GalleryContainer
