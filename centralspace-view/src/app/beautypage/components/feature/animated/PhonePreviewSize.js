import React from 'react'

function PhonePreviewSize(props) {
    const orientation =  props.orientation ? props.orientation + "-in-out" : "";
    return (
        <div className={`phone-preview-sizer iphone ${orientation}`}>
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

export default PhonePreviewSize;
