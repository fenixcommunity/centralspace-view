import React from 'react'

function PhonePreviewItem(props) {
    return (
        <div className="phone-preview-sizer">
            <div className="phone-preview" />
            <div
                className="image-container default"
                style={{
                    backgroundImage: `url(${props.backgroundImageUrl})`
                }}
            />
        </div>
    )
}

export default PhonePreviewItem
