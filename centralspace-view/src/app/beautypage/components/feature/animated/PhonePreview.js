import React from 'react'

function PhonePreview(props) {
    return (
        <div className="phone-preview-halfway">
            <div className="phone-preview-sizer">
                <div className="phone-preview" />
                <div
                    className="image-container default"
                    style={{
                        backgroundImage: `url(${props.backgroundImageUrl})`
                    }}
                />
            </div>
        </div>
    )
}

export default PhonePreview;
