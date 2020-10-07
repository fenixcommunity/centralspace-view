import React from 'react';
import '../../../../resources/beautypage/css/range.css';

function RangePointer(props) {
    return (
        <p className="range-field">
            <input type="range" id={props.id} min={props.min} max={props.max} />
        </p>
    )
}

export default RangePointer
