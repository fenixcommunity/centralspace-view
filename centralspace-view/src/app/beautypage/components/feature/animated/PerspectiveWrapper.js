import React from 'react'

const propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
    leftOrientation: PropTypes.bool
}

const PerspectiveWrapper = ({ title, content, leftOrientation }) => {
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
