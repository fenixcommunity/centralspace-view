import React from 'react';

function FeatureFadeRightInOut(props) {
    return (
        <div className="feature fade-right-in-out">
            <h3>{props.title}</h3>
            {props.content}
        </div>
    )
}

export default FeatureFadeRightInOut;
