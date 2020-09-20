import React from 'react';

function FeatureHeader(props) {
    return (
        <div className="feature">
            <h3>{props.title}</h3>
            {props.content}
        </div>
    )
}

export default FeatureHeader;
