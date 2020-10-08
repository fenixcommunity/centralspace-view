import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    orientation: PropTypes.string.isRequired,
    backgroundImageUrl: PropTypes.node.isRequired
}

const PhonePreviewSize = ({ backgroundImageUrl, orientation }) => {
    const orientation = orientation ? orientation + "-in-out" : "";
    return (
        <div className={`phone-preview-sizer iphone ${orientation}`}>
            <div className="phone-preview" />
            <div
                className="image-container default"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`
                }}
            />
        </div>
    )
}

PhonePreviewSize.propTypes = propTypes;

export default PhonePreviewSize;
