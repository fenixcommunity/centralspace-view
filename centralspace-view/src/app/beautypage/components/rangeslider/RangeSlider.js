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

const RangeSlider = ({}) => {
    /* initialized in init.js */ 
    return (
        <div id="range-slider"/>
    )
}

RangeSlider.propTypes = propTypes;

export default RangeSlider;
