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

const GalleryItem = ({}) => {
    //todo required
    const image = props.image;
    return (
        <div className={`col l4 m6 s12 gallery-item gallery-expand gallery-filter ${props.filterName}`}>
            <div className="gallery-curve-wrapper">
                <a className="gallery-cover"
                    style={{
                        height: image.height
                    }}
                    href="#!"
                >
                    <img src={image.img} alt={image.name} />
                </a>
                <div className="gallery-header">
                    {props.headerContent}
                </div>
                <div className="gallery-body">
                    <div className="title-wrapper">
                        <h3>{props.contentTitle}</h3>
                    </div>
                        {props.content}
                </div>
                <div className="gallery-action">
                    {props.actions && props.actions.map(action => (
                        action
                    ))}
                </div>
            </div>
        </div>
    )
}

GalleryItem.propTypes = propTypes;

export default GalleryItem;
