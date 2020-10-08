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

const PhonePreviewItem = ({ }) => {
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

PhonePreviewItem.propTypes = propTypes;

export default PhonePreviewItem
