import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    filterName: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    headerContent: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    image: PropTypes.shape({
        height: PropTypes.string.isRequired,
        img: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    actions: PropTypes.array
}

const GalleryItem = ({ filterName, contentTitle, headerContent, content, actions, image }) => {
    return (
        <div className={`col l4 m6 s12 gallery-item gallery-expand gallery-filter ${filterName}`}>
            <div className="gallery-curve-wrapper">
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="gallery-cover"
                    style={{
                        height: image.height
                    }}
                >
                    <img src={image.img} alt={image.name} />
                </a>
                <div className="gallery-header">
                    {headerContent}
                </div>
                <div className="gallery-body">
                    <div className="title-wrapper">
                        <h3>{contentTitle}</h3>
                    </div>
                    {content}
                </div>
                <div className="gallery-action">
                    {actions && actions.map(action => (
                        action
                    ))}
                </div>
            </div>
        </div>
    )
}

GalleryItem.propTypes = propTypes;

export default GalleryItem;
