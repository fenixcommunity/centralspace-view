import React from 'react'

function ImagePair(props) {
    return (
        <div className="device-pair">
            <div className="tablet-preview-sizer">
                <div className="tablet-preview" />
                <div
                    className="image-container default"
                    style={{
                        backgroundImage: `url(${props.backgroundImageUrlFirst})`
                    }}
                />
            </div>
            <div className="tablet-preview-sizer left-in-out">
                <div className="tablet-preview" />
                <div
                    className="image-container default"
                    style={{
                        backgroundImage: `url(${props.backgroundImageUrlSecond})`
                    }}
                />
            </div>
        </div>
    )
}

export default ImagePair
