import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/range.css';

const propTypes = {
    id: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired
}

const RangePointer = ({ id, min, max }) => {
    return (
        <p className="range-field">
            <input type="range" id={id} min={min} max={max} />
        </p>
    )
}

RangePointer.propTypes = propTypes;

export default RangePointer
