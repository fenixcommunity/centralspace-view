import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.node.isRequired
}

const GalleryContainer = ({ items }) => {
    return (
        <div id="portfolio">
            <div className="container">
                <div className="gallery row">
                    {items}
                </div>
            </div>
        </div>
    )
}

GalleryContainer.propTypes = propTypes;

export default GalleryContainer
