import React from 'react'

const propTypes = {
    backgroundImageUrl: PropTypes.node.isRequired
}

const PhonePreview = ({ backgroundImageUrl }) => {
    return (
        <div className="phone-preview-halfway">
            <div className="phone-preview-sizer">
                <div className="phone-preview" />
                <div
                    className="image-container default"
                    style={{
                        backgroundImage: `url(${backgroundImageUrl})`
                    }}
                />
            </div>
        </div>
    )
}

PhonePreview.propTypes = propTypes;

export default PhonePreview;
