import React from 'react'

function PerspectiveWrapper(props) {
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

export default PerspectiveWrapper;
