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

const PerspectiveWrapper = ({}) => {
    const orientationClass = props.leftOrientation ? "left-transform-origin right-align" : "right-transform-origin";
    return (
        <div className="perspective-wrapper">
            <div className={`feature rotate-y-in-out fade-in-out ${orientationClass}`}>
                <h3>{props.title}</h3>
                {props.content}
            </div>
        </div>
    )
}

PerspectiveWrapper.propTypes = propTypes;

export default PerspectiveWrapper;
