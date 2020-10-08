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

const PhonePreviewSize = ({}) => {
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

PhonePreviewSize.propTypes = propTypes;

export default PhonePreviewSize;
