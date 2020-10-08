import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/range.css';

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

const RangePointer = ({}) => {
    return (
        <p className="range-field">
            <input type="range" id={props.id} min={props.min} max={props.max} />
        </p>
    )
}

RangePointer.propTypes = propTypes;

export default RangePointer
