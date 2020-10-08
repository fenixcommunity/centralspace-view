import React from 'react'

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

const ImagePair = ({ }) => {
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

ImagePair.propTypes = propTypes;

export default ImagePair
