import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    backgroundImageUrlFirst: PropTypes.node.isRequired,
    backgroundImageUrlSecond: PropTypes.node.isRequired
}

const ImagePair = ({ backgroundImageUrlFirst, backgroundImageUrlSecond }) => {
    return (
        <div className="device-pair">
            <div className="tablet-preview-sizer">
                <div className="tablet-preview" />
                <div
                    className="image-container default"
                    style={{
                        backgroundImage: `url(${backgroundImageUrlFirst})`
                    }}
                />
            </div>
            <div className="tablet-preview-sizer left-in-out">
                <div className="tablet-preview" />
                <div
                    className="image-container default"
                    style={{
                        backgroundImage: `url(${backgroundImageUrlSecond})`
                    }}
                />
            </div>
        </div>
    )
}

ImagePair.propTypes = propTypes;

export default ImagePair
