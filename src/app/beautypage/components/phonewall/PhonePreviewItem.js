import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    backgroundImageUrl: PropTypes.string.isRequired
}

const PhonePreviewItem = ({ backgroundImageUrl }) => {
    return (
        <div className="phone-preview-sizer">
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

PhonePreviewItem.propTypes = propTypes;

export default PhonePreviewItem
